describe('registrationNumbers function', function () {
    it('should add the entered registration number. ', function () {
        var regsNum = regNumbers();
        regsNum.addRegs("CA 123")

        assert.deepEqual(regsNum.getReg(), ["CA 123"]);
    });
    it('should return two entered registration numbers. ', function () {
        var regsNum = regNumbers();
        regsNum.addRegs("CA 123")
        regsNum.addRegs("444 GP")
        assert.deepEqual(regsNum.getReg(), ["CA 123", "444 GP"]);
    });
    
    it('should return registrations numbers that are from Cape town. ', function () {
        var regsNum = regNumbers();
        regsNum.addRegs("CA 123");
        regsNum.addRegs("CA 440");
        regsNum.addRegs("CK 221");
        regsNum.addRegs("CX 123");

        assert.deepEqual(regsNum.getFilter(),["CA 123","CA 440"]);
    });
    it('should return registrations numbers that are from gauteng. ', function () {
        var regsNum = regNumbers();
        regsNum.addRegs("GP 123");
        regsNum.addRegs("GP 440");
        regsNum.addRegs("CK 221");
        regsNum.addRegs("CX 123");

        assert.deepEqual(regsNum.getFilter(),["GP 123","GP 440"]);
    });it('should return registrations numbers that are from bellville. ', function () {
        var regsNum = regNumbers();
        regsNum.addRegs("CY 123");
        regsNum.addRegs("CY 440");
        regsNum.addRegs("CK 221");
        regsNum.addRegs("CX 123");

        assert.deepEqual(regsNum.getFilter(),["CY 123","CY 440"]);
    });

});