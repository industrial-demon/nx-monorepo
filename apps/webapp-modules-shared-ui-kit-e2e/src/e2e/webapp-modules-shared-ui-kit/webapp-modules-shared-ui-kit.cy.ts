describe('webapp-modules-shared-ui-kit: WebappModulesSharedUiKit component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=webappmodulesshareduikit--primary'),
  )

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to WebappModulesSharedUiKit!')
  })
})
