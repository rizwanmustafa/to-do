declare namespace MyTypes{



  interface Task{
    description: string;
    completed: boolean;
  }


  type WithId<T> = T & { id: string};

}