describe("numbersInWords",function(){
  it("1 should return one",function(){
  numbersInWords(1).should.equal("one");
  });

  it("22 should return twenty two", function(){
    numbersInWords(23).should.equal("twenty three");
  });

  it("451 should return four hundred fifty one", function(){
    numbersInWords(451).should.equal("four hundred fifty one");
  });

  it("1342 should return one thousand three hundred fourty two",function(){
    numbersInWords(1342).should.equal("one thousand three hundred fourty two")
  });

  it("10 should return ten",function(){
    numbersInWords(10).should.equal("ten")
  });

  it("14 should return fourteen",function(){
    numbersInWords(14).should.equal("fourteen")
  });

  it("405 should return four hundred five", function(){
    numbersInWords(405).should.equal("four hundred five");
  });

  it("212817 should return two hundred twelve eight hundred seventeen", function(){
    numbersInWords(212817).should.equal("two hundred twelve thousand eight hundred seventeen");
  });

  it("8212343 should return eight million two hundred twelve thousand three hundred fourty three", function(){
    numbersInWords(8212343).should.equal("eight million two hundred twelve thousand three hundred fourty three");
  });

  it("200 should return two hundred", function(){
    numbersInWords(200).should.equal("two hundred");
  });

  it("0 should return zero", function(){
    numbersInWords(0).should.equal("zero");
  });

  it("4000 should return four thousand", function(){
    numbersInWords(4000).should.equal("four thousand");
  });

  it("40000 should return fourty thousand", function(){
    numbersInWords(40000).should.equal("fourty thousand");
  });

  it("400000 should return four hundred thousand", function(){
    numbersInWords(400000).should.equal("four hundred thousand");
  });

  it("4000000 should return four million", function(){
    numbersInWords(4000000).should.equal("four million");
  });

  it("40000000 should return fourty million", function(){
    numbersInWords(40000000).should.equal("fourty million");
  });

  it("4001 should return four thousand one", function(){
    numbersInWords(4001).should.equal("four thousand one");
  });
});

