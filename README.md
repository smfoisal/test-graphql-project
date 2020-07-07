## GraphGL Test Project

Run the app using `npm run dev`

#### Query

```
{
  site(id: 1) {
    id
    siteName
    openingHours
    securityContact
    address
    streetAddress
    zipCode
    state
    city
    suburb
    totalEmployees
    floors {
      id
      siteId
      floorNumber
      wardenRequired
      peepsRequired
      floorManagerName
      managerPhone
      managerEmail
    }
  }
}
```

#### Create Mutation Test

```
mutation {
  createSite(siteName:"test") {
    id
    siteName
  }
}
```

```
mutation {
  addFloor(siteId: 1, floorNumber: 1) {
    id
    siteId
    floorNumber
  }
}
```

#### Update Mutation Test

```
mutation {
  updateSite(
    id:1,
    siteName: "test-update",
    openingHours: 900,
    securityContact: "000",
    address:"1/a",
    streetAddress: "test-street",
    zipCode: 123,
    state:"state",
    city:"city",
    suburb:"suburb",
    totalEmployees:20,
  ) {
    id
    siteName
    openingHours
    securityContact
    address
    streetAddress
    zipCode
    state
    city
    suburb
    totalEmployees
  }
}
```

```
mutation {
  updateFloor(
    id:1,
    siteId: 1,
    floorNumber: 10,
    wardenRequired: true,
    peepsRequired: true,
    floorManagerName: "sample-manager-name",
    managerPhone: "123456",
    managerEmail: "sample@test.com",
  ) {
    siteId
    floorNumber
    wardenRequired
    peepsRequired
    floorManagerName
    managerPhone
    managerEmail
  }
}
```

#### Delete Mutation Test

```
mutation {
  deleteSite(id:1) {
    id
    siteName
  }
}
```

```
mutation {
  deleteFloor(id:1) {
    id
    floorNumber
  }
}
```
