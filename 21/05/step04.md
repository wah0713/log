### 1、原因是add()的入参类型（这里的例子是2个入参都是数字类型）中间改变了一次，这里是变为字符类型。导致javaScript需要回去再次计算出add()的结果，所以增加耗时，从而影响性能。