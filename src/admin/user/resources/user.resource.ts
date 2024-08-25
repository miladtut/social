export class UserResource {
    static item(user: any) {
      return {
        id: user.id,
        name: user.f_name + " " + user.l_name,
        email: user.email,
        // Add more fields as needed
      };
    }
  
    static collection(users: any[]) {
      return users.map(user => this.item(user));
    }
  }