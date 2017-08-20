 const expect = require('expect');

  const {Users} = require('./users');


describe('USers', () => {
    var users;
    beforeEach(()=>{
       users = new Users();
       users.users =[{
         id: 1,
         name: 'Joemar',
         room: 'My room'
         },
                     
        {
         id: 2,
         name: 'Zyr',
         room: 'Her room'
         },
                     
        {
         id: 3,
         name: 'MyWife',
         room: 'My room'
         }];        
    });
    
    
    it('should add new users',() =>{
        var users = new Users();
        var user = {
            id: '123',
            name:'Joemar',
            room: 'Suite 204'
            
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });
    
      it('should remove a user',() =>{
         var userId = 1;
          
          var user = users.removeUser(userId);
          expect(user.id).toBe(userId);
          expect(users.users.length).toBe(2);   
          
      
    });
    
       it('should not remove a user',() =>{
         var userId = '99';
          
          var user = users.removeUser(userId);
          expect(user).toNotExist();
          expect(users.users.length).toBe(3); 
    });
    
    
      it('should find user',() =>{
          var userId = 2;
          var user = users.getUser(userId);
          expect(user.id).toBe(userId);
       
    });
    
       it('should not find user',() =>{
        var userId = '99';
          var user = users.getUser(userId);
          expect(user).toNotExist();
    });
    
    
   
    
    
    
    
     it('should return names for My Room',() =>{
        var userList = users.getUserList('My room');
        
        expect(userList).toEqual(['Joemar','MyWife']);
    });
    
    
     it('should return names for Her Room',() =>{
        var userList = users.getUserList('Her room');
        
        expect(userList).toEqual(['Zyr']);
    });
});