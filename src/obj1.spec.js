import Obj1 from './obj1'

describe('Given an instance of my Obj1 library', () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
      const d = new Obj1()
      expect(d.name).toEqual('Obj1')
    })
  })
})
