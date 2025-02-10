/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
let userCredentials
let authToken;
let userID;
let booksIsbns = [];


class ApiPage {
    

    createUser() { 
        userCredentials = {
            userName: faker.internet.username(),
            password: this.generateValidPassword(),
        };

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: userCredentials,
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log('Usuário criado com sucesso!');
            userID = response.body.userID; 
        });
    }

    generateToken(){ 
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: userCredentials,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Token gerado com sucesso!');
            authToken = response.body.token;
        });
    }

    validAuthentication(){
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/Authorized',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: userCredentials,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Autorização validada com sucesso!');
        });
    }

    listBookAndStoreTwo(){ 
        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books',
            headers: {
                accept: 'application/json',
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            const books = response.body.books;

            // Armazena os ISBNS dos dois primeiros livros
            booksIsbns.push(books[0].isbn, books[1].isbn);
            cy.log('ISBNS armazenados:', booksIsbns);
        });
    }

    rentTwoBooks(){ 
        cy.wrap(booksIsbns).should('have.length', 2).then(() => {
            cy.request({
                method: 'POST',
                url: 'https://demoqa.com/BookStore/v1/Books',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: {
                    userId: userID,
                    collectionOfIsbns: booksIsbns.map(isbn => ({ isbn })),
                },
            }).then((response) => {
                expect(response.status).to.eq(201);
                cy.log('Livros alugados com sucesso:', response.body);
            });
        });
    }

    MustListRentalDetails() { 
        cy.request({
            method: 'GET',
            url: `https://demoqa.com/Account/v1/User/${userID}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Detalhes do aluguel por usuário:');
            response.body.books.forEach((book, index) => {
                cy.log(`Livro ${index + 1}:`);
                cy.log(`ISBN: ${book.isbn}`);
                cy.log(`Título: ${book.title}`);
                cy.log(`Subtítulo: ${book.subTitle}`);
                cy.log(`Autor: ${book.author}`);
                cy.log(`Data de publicação: ${book.publish_date}`);
                cy.log(`Páginas: ${book.pages}`);
                cy.log(`Descrição: ${book.description}`);
                cy.log(`Website: ${book.website}`);
            });
        });
    }

    generateValidPassword() {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
        const specialChars = '!@#=';
        const allChars = lowercase + uppercase + digits + specialChars;

        let password = '';

        password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        password += digits.charAt(Math.floor(Math.random() * digits.length));
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

        while (password.length < 8) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        password = this.shuffleString(password);
        cy.log(`Senha gerada: ${password}`);
        return password;
    }

    shuffleString(string) {
        return string.split('').sort(() => 0.5 - Math.random()).join('');
    }
}

export default new ApiPage();
