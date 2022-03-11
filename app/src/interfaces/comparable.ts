export interface Comparable<T> {
    areEqual(obj: T): boolean;
}