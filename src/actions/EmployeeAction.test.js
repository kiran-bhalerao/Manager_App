const EmployeeAction = require("./EmployeeAction")
// @ponicode
describe("EmployeeAction.employeeUpdate", () => {
    test("0", () => {
        let callFunction = () => {
            EmployeeAction.employeeUpdate({ prop: "Software Engineer", value: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            EmployeeAction.employeeUpdate({ prop: "Marketing", value: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            EmployeeAction.employeeUpdate({ prop: "Marketing", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            EmployeeAction.employeeUpdate({ prop: "Sales", value: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            EmployeeAction.employeeUpdate({ prop: "Data Scientist", value: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            EmployeeAction.employeeUpdate({ prop: undefined, value: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("EmployeeAction.employeeCreate", () => {
    test("0", () => {
        let callFunction = () => {
            EmployeeAction.employeeCreate({ name: "George", email: "email@Google.com", phone: "+1-541-754-3010'", shift: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            EmployeeAction.employeeCreate({ name: "George", email: "ponicode.com", phone: "0649640808'", shift: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            EmployeeAction.employeeCreate({ name: "Michael", email: "user1+user2@mycompany.com", phone: "+33 6 49 64 08 08'", shift: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            EmployeeAction.employeeCreate({ name: "Michael", email: "TestUpperCase@Example.com", phone: "0322 999 999'", shift: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            EmployeeAction.employeeCreate({ name: "Edmond", email: "something@example.com", phone: "+33 6 49 64 08 08'", shift: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            EmployeeAction.employeeCreate({ name: undefined, email: undefined, phone: "", shift: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("EmployeeAction.employeeFetch", () => {
    test("0", () => {
        let callFunction = () => {
            EmployeeAction.employeeFetch()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("EmployeeAction.employeeSave", () => {
    test("0", () => {
        let callFunction = () => {
            EmployeeAction.employeeSave({ name: "Anas", email: "user1+user2@mycompany.com", phone: "+44 7911 123456'", shift: "Michael", uid: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            EmployeeAction.employeeSave({ name: "Pierre Edouard", email: "email@Google.com", phone: "+1-541-754-3010'", shift: "Pierre Edouard", uid: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            EmployeeAction.employeeSave({ name: "Jean-Philippe", email: "user1+user2@mycompany.com", phone: "+44 7911 123456'", shift: "Michael", uid: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            EmployeeAction.employeeSave({ name: "Edmond", email: "user1+user2@mycompany.com", phone: "+33 6 49 64 08 08'", shift: "Jean-Philippe", uid: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            EmployeeAction.employeeSave({ name: "George", email: "something@example.com", phone: "+33 6 49 64 08 08'", shift: "George", uid: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            EmployeeAction.employeeSave({ name: undefined, email: undefined, phone: "", shift: undefined, uid: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("EmployeeAction.employeeDelete", () => {
    test("0", () => {
        let callFunction = () => {
            EmployeeAction.employeeDelete({ uid: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            EmployeeAction.employeeDelete({ uid: "a85a8e6b-348b-4011-a1ec-1e78e9620782" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            EmployeeAction.employeeDelete({ uid: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            EmployeeAction.employeeDelete({ uid: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
