# Solid Design Principles in Software Development

## Single Responsibility Principle

The single responsibility principle provides a substantial benefit. Classes, software components and microservices that have only one responsibility are much easier to explain, understand and implement than the ones that provide a solution for everything. This reduces the number of bugs, improves your development speed, and makes your life as a software developer a lot easier.

It also allows for extension without modification to the class itself which connects to the next principle.

***What is the responsibility of your class/component/microservice?***

If your answer includes the word “and”, you’re most likely breaking the single responsibility principle. Then it’s better to take a step back and rethink your current approach. There is most likely a better way to implement it.


## Open-Closed Principle

A function, module or class should be open to expansion and closed to modification.

"A class is closed, since it may be compiled, stored in a library, baselined, and used by client classes. But it is also open, since any new class may use it as parent, adding new features. When a descendant class is defined, there is no need to change the original or to disturb its clients."

***inheritance introduces tight coupling if the subclasses depend on implementation details of their parent class.***

The Polymorphic Open/Closed Principle uses interfaces instead of superclasses to allow different implementations which you can easily substitute without changing the code that uses them. The interfaces are closed for modifications, and you can provide new implementations to extend the functionality of your software.

The main benefit of this approach is that an interface introduces an additional level of abstraction which enables ***loose coupling***. The implementations of an interface are independent of each other and don’t need to share any code. If you consider it beneficial that two implementations of an interface share some code, you can either use ***inheritance*** or ***composition***.