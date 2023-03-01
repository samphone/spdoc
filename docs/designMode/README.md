---
sidebar: auto
---
# 设计模式
设计模式是为了解决一些特定问题而产生的特定的想法观点或者抽象方式，以此帮助我们更好的解决问题。设计模式可以被分为三大类：创建、构造、行为范例

## 工厂模式(创建)
工厂模式是用来创建对象的一种最常用的设计模式。我们不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。工厂模式根据抽象程度的不同可以分为：简单工厂，工厂方法和抽象工厂。
::: warning 意图
明确地计划不同条件下创建不同实例,主要解决接口选择的问题
:::
::: tip 优点
1. 一个调用者想创建一个对象，只要知道其名称就可以了。 
2. 扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 
3. 屏蔽产品的具体实现，调用者只关心产品的接口。
:::
::: danger 缺点
每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
:::
### 简单工厂
简单工厂模式又叫静态工厂模式，由一个工厂对象决定创建**某一种产品对象类**的实例。主要用来创建**同一类对象**,也是前端项目中常用的工厂模式。

#### 示例

平台对接：h5项目需要对接甲乙丙三个客户 需要授权以及支付

#### 实现
``` js
class Plateform {
    constructor(name){
        this.name = name
    }
    checkToken(){}
    pay(){}
}

class APlateForm extends Plateform {
    constructor(name){
        super(name)
    }  
    // ...
}

class BPlateForm extends Plateform {
    constructor(name){
        super(name)
    }
    // ...
}

class PlateformFactory {
    static creator(name){
        if(name === 'A') return new APlateForm(name)
        if(name === 'B') return new BPlateForm(name)
    }
}

const a = PlateformFactory.creator('A')
const b = PlateformFactory.creator('B')
```


### 工厂方法
通过对产品类的抽象使其创建业务主要负责用于创建**多类产品**的实例

```js
class Plateform {
    constructor(name){
        this.name = name
    }
    checkToken(){}
    pay(){}
}

class APlateForm extends Plateform {
    constructor(name){
        super(name)
    }  
}

class BPlateForm extends Plateform {
    constructor(name){
        super(name)
    }
}

class PlateformFactoryA {
    createFactory(){
        return new APlateForm()
    }
}
class PlateformFactoryB {
    createFactory(){
        return new BPlateForm()
    }
}

class PlateformFactory {
    static creator(name){
        if(name === 'A') return new PlateformFactoryA(name)
        if(name === 'B') return new PlateformFactoryB(name)
    }
}

const a = PlateformFactory.creator('A').createFactory()
const b = PlateformFactory.creator('B').createFactory()
```

### 抽象工厂
通过对类的工厂抽象使其业务用于对**产品类簇的创建而不负责创建某一类产品**的实例
```js
class Pay {
    action(){}
}

class APay extends Pay {
    
}
class BPay extends Pay {

}
class Check {
    action(){}
}

class ACheck extends Check {
    
}
class BCheck extends Check {

}

class Factory {
    createPay(){}
    createCheck(){}
}

class FactoryA extends Factory {
    createCheck(){
        return new ACheck()
    }
    createPay(){
        return APay()
    }
}

class FactoryB extends Factory {
    createCheck(){
        return new BCheck()
    }
    createPay(){
        return BPay()
    }
}

const fA = new FactoryA()
fA.createCheck().action()
fA.createPay.action()

```

## 单例模式(创建)
它提供了一种创建对象的最佳方式。这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了**一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象**。
::: warning 注意
1. 单例类只能有一个实例。
2. 单例类必须自己创建自己的唯一实例。
3. 单例类必须给所有其他对象提供这一实例。
:::
::: tip 优点
1. 在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例。
2. 避免对资源的多重占用（比如写文件操作）。
:::
::: danger  缺点
没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。
:::
#### 应用实例
- 一个班只有一个班主任
- Windows 是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。
- 一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件
- ...
#### 实现
``` js
class SingleInstance {
    static instance = null
    static getInstance(){
        if(!SingleInstance.instance) {
            SingleInstance.instance = new SingleInstance()
        }
        return SingleInstance.instance
    }
    // some methods
}

const instance = SingleInstance.getInstance()
```
## 观察者模式/订阅发布模式(行为)
它定义了对象间的一种一对多的依赖关系，只要当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新，解决了主体对象与观察者之间功能的耦合，即一个对象状态改变给其他对象通知的问题。
::: tip 优点
1. 观察者和被观察者是抽象耦合的。 
2. 建立一套触发机制。
:::
::: danger 缺点
1. 如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。 
2. 如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。 
3. 观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。
:::
#### 应用实例
- vue双向绑定
- dom事件
- eventBus
- ...

### 观察者模式
包含两个角色 Observer & Subject
#### 实现
```js
class Observer {
    constructor(name){
        this.name = name
    }
    notify(){
        console.log(`通知${this.name}`)
    }
}

class Subject {
    objectList = new Set()
    state = 0

    getState(){
        return this.state
    }

    setState(state){
        this.state = state
        this.notify() 
    }

    add(observer){
        if(!this.objectList.has(observer)) this.objectList.add(observer)
    }

    delete(observer){
        if(this.objectList.has(observer)) this.objectList.delete(observer)
    }

    notify(){
        this.objectList.forEach(observer=>observer.notify())
    }
}


const o1 = new Observer('张三')
const o2 = new Observer('李四')
const o3 = new Observer('王二')

const s = new Subject()
s.add(o1)
s.add(o2)
s.delete(o1)
s.add(o3)
s.setState(1)
```

### 订阅发布模式
包含三个角色：Publisher(发布者) & Event Channel（事件总线）& Subscriber（订阅者）
```js
class Event {
    subscriberMap = new Map()

    on(name, cb){
        let _targetCb = this.subscriberMap.get(name) 
        if(!_targetCb) {
            this.subscriberMap.set(name, _targetCb = new Set())
        }
        _targetCb.add(cb)
    }
    off(name, cb){
        const _targetCb = this.subscriberMap.get(name)
        if(!_targetCb) return
        if(cb === null) {
            _targetCb.clear()
            return
        }
        _targetCb.delete(cb)
    }
    emit(name, data){
        const _targetCb = this.subscriberMap.get(name)
        if(!_targetCb) return
        _targetCb.forEach(cb=>cb(data))
    }
}

class Publisher {
    constructor(name, data){
        this.name = name
        this.data = data
    }
}

class Subscriber {
    constructor(name, cb){
        this.name = name
        this.cb = cb
    }
    
}

const s = new Subscriber('running', (data)=>{console.log(`running: ${data}`)})
const s1 = new Subscriber('running', (data)=>{console.log(`running2: ${data}`)})
const s2 = new Subscriber('swimming', (data)=>{console.log(`swimming: ${data}`)})

const p = new Publisher('running', '发布了running')
const p1 = new Publisher('swimming', '发布了swimming')

const e = new Event()
e.on(s.name, s.cb)
e.on(s1.name, s1.cb)
e.off(s1.name, s1.cb)
e.on(s2.name, s2.cb)
e.emit(p.name, p.data)
e.emit(p1.name, p1.data)
```


## 迭代器模式(行为)
提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。
::: tip 优点
1. 它支持以不同的方式遍历一个聚合对象。 
2. 迭代器简化了聚合类。 
3. 在同一个聚合上可以有多个遍历。 
4. 在迭代器模式中，增加新的聚合类和迭代器类都很方便，无须修改原有代码。
:::
::: danger 缺点
由于迭代器模式将存储数据和遍历数据的职责分离，增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。
:::
### 内部迭代器
不需关注内部实现
```js
function each(arr, fn){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(fn(element, index, arr) === false) return;
    }
}

each([1,2,3,4], (el, i)=>{
    if(i>2) return false
    console.log(el, i)
})
```
### 外部迭代器
需要显示调用展示
```js
class Iterator {
    current
    constructor(obj){
        this.obj = obj
        this.current = 0
    }
    next(){
        return this.obj[++this.current]
    }

    value(){
        return this.obj[this.current]
    }

    isDone(){
        return this.current - this.obj.length < 0
    }
}

const i = new Iterator([1,2,3,4])
console.log(i.value(),i.next(),i.isDone())
console.log(i.value(),i.next(),i.isDone())
console.log(i.value(),i.next(),i.isDone())
console.log(i.value(),i.next(),i.isDone())
```

## 装饰器模式(结构)
允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。
::: tip 优点
装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
:::
::: danger 缺点
多层装饰比较复杂。
:::
::: warning 使用场景
1. 扩展一个类的功能。 
2. 动态增加功能，动态撤销。
:::
```js
class Circle {
    draw(){
        console.log('circle draw')
    }
}

class Decorate {
    constructor(circle){
        this.circle = circle
    }

    draw(){
        this.setBorder()
        this.circle.draw()
    }

    setBorder(){
        console.log('加一下border')
    }
}

const c1 = new Circle()
const d = new Decorate(c1)

d.draw()
```
修饰class
```ts
function changeIsLogin(bol:boolean){
    return function(target:any){
        target.isLogin = bol
    }
}

// function changeIsLogin(target: any){
//     target.isLogin = true
// }

@changeIsLogin(true)
class Login {
    static isLogin:boolean
}

console.log(Login.isLogin)
```
修饰class methods
```ts
function readonly(target:any, key:string, descriptor: PropertyDescriptor){
    descriptor.writable = false
}

class Circle {
    size(){}

    @readonly
    draw(){}
}

const c = new Circle()
```

## 代理模式(结构)
一个类代表另一个类的功能。为其他对象提供一种代理以控制对这个对象的访问。
::: tip 优点
1. 职责清晰。 
2. 高扩展性。 
3. 智能化。
:::

::: danger 缺点
1. 由于在客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。 
2. 实现代理模式需要额外的工作，有些代理模式的实现非常复杂。
:::

```ts
interface IImage {
    display():void
}

class RealImage implements IImage {
    fileName: string
    constructor(fileName: string){
        this.fileName = fileName
    }
    display(): void {
        this.loadFromDisk()
        console.log('展示...')
    }
    private loadFromDisk(){
        console.log('读取中')
    }
}

class ProxyImage implements IImage{
    realImage: RealImage
    fileName: string
    constructor(fileName:string){
        this.fileName = fileName
    }
    display(): void {
        // limit action
        if(!this.realImage) this.realImage = new RealImage(this.fileName)
        this.realImage.display()
    }
}

const img:ProxyImage = new ProxyImage('xxx.png')

img.display()
```