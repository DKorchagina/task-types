/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type Tmass = {
  name:string;
  age: number;
  gender: 'male' | 'female';
};

type Tmasses = Tmass[];
export function getPersons():Tmasses;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
type TmasComp = Tmass & {company:string};
type Tpearson = Tmass | TmasComp;
export function personToString(person: Tpearson):string;
