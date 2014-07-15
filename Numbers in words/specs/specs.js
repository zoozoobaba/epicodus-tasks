describe("numbersInWords",function(){
  it("1 equals one",function(){
  numbersInWords(1).should.equal("one");
  });

  it("22 equals twenty two", function(){
    numbersInWords(23).should.equal("twenty three");
  });
  it("451 equals to four hundred fifty one", function(){
    numbersInWords(451).should.equal("four hundred fifty one");
  });
  it("1342 equals one thousand three hundred fourty two",function(){
    numbersInWords(1342).should.equal("one thousand three hundred fourty two")
  });
  it("10 should return ten",function(){
    numbersInWords(10).should.equal("ten")
  });
  it("14 should return 14",function(){
    numbersInWords(14).should.equal("fourteen")
  });
  it("405 equals to four hundred five", function(){
    numbersInWords(405).should.equal("four hundred five");
  });
    it("212817 equals to two one two eight one seven", function(){
    numbersInWords(212817).should.equal("two one two eight one seven");
  });

});

