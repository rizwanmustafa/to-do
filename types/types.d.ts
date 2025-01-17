declare namespace MyTypes{


  interface User{
    username: string;
    password: string;
  }


  interface Task{
    description: string;
    completed: boolean;
  }


  type WithId<T> = T & { id: string};

}