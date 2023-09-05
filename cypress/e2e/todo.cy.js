/* todo.cy.js */

describe('Fluxo Todo List', () => {

  beforeEach(() => {
    // visit
  });

  context('Verificando botão de limpar texto no input', () => {
    it('Dado que o usuário acessa a página da aplicação', () => {
      cy.visit('https://targ1no.github.io/todo-list/')
    });

    it('E digita um item no input', () => {
      cy.typeInputText('School')
      cy.inputShoulHaveValue('School')
    });

    it('Quando clica no botão "Clear"', () => {
      cy.get('#clearButton')
        .click()
    });

    it('Então o input deverá estar vazio', () => {
      cy.get('#input')
        .should('not.have.value', 'School')
    })
  })

  context('Verificando botão para adicionar um novo Todo', () => {
    it('Dado que o usuário acessa a página da aplicação', () => {
      cy.visit('https://targ1no.github.io/todo-list/')
    });

    it('E digita um item no input', () => {
      cy.typeInputText('School')
      cy.inputShoulHaveValue('School')
    });

    it('Quando clica no botão "Add"', () => {
      cy.get('#addButton')
        .click()
    });

    it('Então deverá ter criado um novo item na lista de Todos', () => {
      cy.get('#list > div')
        .should('be.not.empty')
    })
  })

  context('Verificando checkbox para marcar Todo como feito', () => {
    it('Dado que o usuário acessa a página da aplicação', () => {
      cy.visit('https://targ1no.github.io/todo-list/')
    });

    it('E digita um item no input', () => {
      cy.typeInputText('School')
      cy.inputShoulHaveValue('School')
    });

    it('E clica no botão "Add"', () => {
      cy.get('#addButton')
        .click()
    });

    it('Quando o Todo estiver criado', () => {
      cy.get('#list > div')
        .should('be.not.empty')
    })

    it('E clicar no checkbox em branco, acima do Todo', () => {
      cy.get('[type=checkbox]')
        .click()
    })

    it('Então o Todo deverá estar com um risco, apontando que já foi feito', () => {
      cy.get('#list > div').screenshot("Todo riscado")
    })
  })

  context('Verificando botão para deletar Todo', () => {
    it('Dado que o usuário acessa a página da aplicação', () => {
      cy.visit('https://targ1no.github.io/todo-list/')
    });

    it('E digita um item no input', () => {
      cy.typeInputText('School')
      cy.inputShoulHaveValue('School')
    });

    it('E clica no botão "Add"', () => {
      cy.get('#addButton')
        .click()
    });

    it('Quando o Todo estiver criado', () => {
      cy.get('#list > div')
        .should('be.not.empty')
    })

    it('E clicar no botão "X" vermelho, acima do Todo', () => {
      cy.get('.deleteItem')
        .click()
    })

    it('Então a lista de Todo deverá estar vazia', () => {
      cy.get('#list > div')
        .should('be.empty')
    })
  });
})