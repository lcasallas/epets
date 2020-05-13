
describe('Prueba navegacion', () => {

  it('Visita una categoria', () => {
    cy.visit('/');
    cy.contains('.container-icons', 'Ropa').click();
    cy.wait(2000);
  });
  
  it('Ejecuta filtro tipo mascota', () => {
    cy.contains('.Section__filter__option__pet','Perros').click();
    cy.wait(2000);
  });
  
  it('Ejecuta click enlace de compra', () => {
    cy.get(':nth-child(1) > .card__link > .card__link__button > a').click();
  });

  it('Prueba reserva cita', () => {
    cy.visit('/');
    cy.contains('.container-icons', 'Consulta').click();
  });

});