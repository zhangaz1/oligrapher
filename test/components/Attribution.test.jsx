import React from 'react'
import Attribution from '../../app/components/Attribution'

describe("<Attribution>", function(){
  it("renders user with link", function(){
    let users = [
      { name: "TestName", url: "https://example.com/TestName" },
      { name: "Bozo", url: "https://example.com/Bozo" }
    ]
    let component = shallow(<Attribution users={users} />)

    expect(component.find('#oligrapher-attribution-users').text()).to.equal("by TestName and Bozo")
    expect(component.find('a').at(0).prop('href')).to.equal(users[0].url)
    expect(component.find('a').at(1).prop('href')).to.equal(users[1].url)
  })

  it("renders user without link", function(){
    let component = shallow(<Attribution users={[{ name: "TestName" }]} />)
    expect(component.find('a').length).to.equal(0)
  })

  it("renders date", function(){
    let component = shallow(<Attribution users={[{ name: "TestName" }]} date="Test Date"/>)
    expect(component.find('#oligrapher-attribution-date').text())
      .to.equal("Test Date")
  })
})
