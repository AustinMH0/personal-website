const exp = require("constants");
const { printf } = require("extsprintf");

describe('Visitor Count API Test', () => {
  const APIEndpoint = 'https://aw5zlq7hs4.execute-api.us-west-1.amazonaws.com/VisitorCountAPI/VisitorCountDDBManager'
  it('Compare visitor count value on website against the value within the database', () => {
    cy.request('GET', APIEndpoint)
    .its('body.Count')
    .then((current_count) => {
      current_count++;
      var current_count_as_str = current_count.toString();
      cy.request('GET', APIEndpoint)
      .its('body.Count')
      .should('eq', (current_count_as_str));
    })
  })
})
