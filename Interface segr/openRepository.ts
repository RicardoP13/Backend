import Repository from "./repository";

export default interface OpenRepository<T>{

    insert(entity: T): void;

    update(entity: T): void;

    //get(): T;

    delete(id: string): void;
}