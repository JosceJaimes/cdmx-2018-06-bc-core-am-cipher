describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe(´cipher.encode´, ()=> {

      it("deberia ser una función", () =>{
      assert.equal(typeof cipher.encode, ´function´);
    });

  it("debería de retornar "HIJKLMOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33"), () =>{
      assert.equal(window.cipher.encode(ASBCDEFGHIJKLMNOPQRSTUVWXYZ´, 33), ´HIJKLMOPQRSTUVWXYZABCDEFG´);
  });

  it("debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcedefghijklmnopqrstuvwxyz" con offset 33", () =>{
      assert.equal(cipher.enode("abcedefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg");
  });

  it("debería retornar "3456789012" para "0123456789" con offset 33", () => {
      assert.equal(cipher.encode("0123456789", 33), "3456789012");
    });
  it("debería retornar " " para " " con offset 33", () => {
      assert.equal(cipher.encode(" ", 33), " ");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33');
  });

  describe("cipher.decode", () =>{

      it("debería ser una funcion", ()=>
      assert.equal(typeof cipher.decode, "function");
  });

  it("deberia retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMOPQRSTUVWXYZABCDEFG"con offset 33", () => {
      assert.equal(cipher.decode("HIJKLMOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
  });
  it("debería retornar "abcedefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33", () =>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33), "abcedefghijklmnopqrstuvwxyz")
  });
  it("debería retornar "0123456789" para "3456789012" con offset 33", () => {
      assert.equal(cipher.decode("3456789012", 33), "0123456789");
  });
  it ("debería retornar " " para " " con offset 33", () => {
      assert.equal(cipher.decode(" ", 33), " ");
  });
    });

   describe("cipher.createCipher)WidthOffset", () =>{

       it("debería de ser una función", () => {
           assert.equal(typeof cipher.createCipher.WidthOffset, "function");
  });

