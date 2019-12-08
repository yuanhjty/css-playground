<template>
  <div>
    <h1>line-height</h1>

    <h4>
      em框、内容区、行间距、行内框、行框、
      <a href="https://drafts.csswg.org/css-inline-3/#strut">strut</a>
    </h4>
    <ul>
      <li>
        em框：在字体中定义，也称字符框，font-size确定了字符框的高度。实际字形可能比em框更高或更矮
      </li>
      <li>
        内容区：
        <ol>
          <li>
            在非替换元素中可能有两种，CSS2.1允许用户代理选择其中一种。一、各字符的em框串在一起构成的框，
            二、元素中字符字形描述的框。
          </li>
          <li>
            在替换元素中，内容区就是元素固有高度再加上可能存在的padding、border和margin
          </li>
        </ol>
      </li>
      <li>
        行间距：line-height -
        font-size的差值，分成两半分别应用到内容区的顶部和底部。
        行间距只作用于非替换元素
      </li>
      <li>
        行内框：通过向内容去添加行间距来描述，对于非替换元素等于line-height的值，
        对于替换元素或inline-block元素等于内容区高度。
        <br />产生条件：在块级容器的正常流中存在匿名行内元素或行内元素时，这些元素生成行内框。
      </li>
      <li>行框：包含该行中出现的行内框的最高点和最低点的最小框</li>
      <li>
        strut：每个行框起始处有一个strut（假想的宽度为0的节点，带有元素的font和line-height属性）
      </li>
      <li>
        inline-block元素对于外部来说是一个行内元素，对于内部的元素来说是一个提供正常流布局的块级容器，
        inline-block元素内部可以生成独立的行框
      </li>
      <li>inline元素自身可生成一个行内框，但其内部无法生成独立的行框</li>
    </ul>

    <h4>line-heigt</h4>
    <ul>
      <li>
        对内联非替换元素来说，line-height只影响行框高度，不影响元素本身的高度
      </li>
      <li>对内联替换元素来说，line-height对其无任何效果</li>
      <li>
        对块级元素来说，如果其中生成了行框，则line-height通过影响行框高度影响块级容器的高度
      </li>
    </ul>

    <h4>line-height的继承</h4>
    <ul>
      <li>父元素的line-height为数字值或normal时，子元素直接继承该值</li>
      <li>
        父元素的line-height为其他类型的值（如px值或百分比值）时，子元素继承父元素line-height的计算值
      </li>
    </ul>

    <Example :html="html" :css="css">
      <h4>块级容器中无text或非空内联元素时，不生成行框</h4>
      <div class="padding">
        <div class="outline"></div>
      </div>
      <div class="padding">
        <div class="outline">
          <span></span>
          <span></span>
        </div>
      </div>

      <h4>
        块级容器中有text或非空内联元素时，生成行框，line-height影响行框高度，
        进而影响块级容器的高度
      </h4>
      <div class="line-height-0 outline margin">line-height: 0</div>
      <div class="line-height-1 outline margin">line-height: 1</div>
      <div class="line-height-2 outline margin">line-height: 2</div>

      <h4>行框高度计算</h4>
      <p>
        strut节点的行内框最高，为外部容器的line-height值40px，内部两个span节点的line-height分别
        为30px和10px，它们的行内框都没超过strut节点的行内框上下边界，所以行框高度为40px。
      </p>
      <div class="line-height-50px outline margin">
        <span class="line-height-30px outline">xxx</span>
        <span class="line-height-10px outline">zzz</span>
      </div>

      <p>
        strut节点的行内为外部容器的line-height值20px，内部两个span节点的line-height分别为30px和
        40px，vertical-align分别为30px和-30px，它们的行内框的顶部和底部分别超过了strut节点的行内框
        的上下边界，行框最高点为第一个span行内框的最高点，最低点为第二个span行内框的最低点。
      </p>
      <div class="line-height-10px outline margin">
        <span class="line-height-30px vertical-align-30px outline">xxx</span>
        <span class="line-height-40px vertical-align--30px outline">zzz</span>
      </div>

      <p>
        下面示例中，由于每个行框中存在line-height为50px的strut节点，导致内部的span的line-heigt
        虽然重置成了20px，但依然无法改变行框的高度，如果span的line-height被重置为比50px
        更大的值， 则行框高度会使用更大的值。
      </p>
      <div class="line-height-50px outline">
        <span class="line-height-20px outline">
          参横斗转欲三更，苦雨终风也解晴。 云散月明谁点缀？天容海色本澄清。
          空余鲁叟乘桴意，粗识轩辕奏乐声。 九死南荒吾不恨，兹游奇绝冠平生。
        </span>
      </div>

      <p>
        将内部span
        display属性设置为inline-block，span内部生成了独立于外部的行框，
        设置在span上的
        line-height生效。但是inline-block元素的baseline为其内容区底部，与其所在行框的strut节点的
        baseline（不在内容区底部）对齐，导致外层容器底部看起来留有一些间隙。
      </p>
      <div class="line-height-50px outline">
        <span class="line-height-20px inline-block outline">
          参横斗转欲三更，苦雨终风也解晴。 云散月明谁点缀？天容海色本澄清。
          空余鲁叟乘桴意，粗识轩辕奏乐声。 九死南荒吾不恨，兹游奇绝冠平生。
        </span>
      </div>

      <h4>line-height的继承</h4>
      <div class="line-height-2 outline margin">
        <span class="font-size-14px">山中何事？</span>
        <span class="font-size-20px">松花酿酒，春水煎茶。</span>
      </div>
      <div class="line-height-30px outline margin">
        <span class="font-size-14px">山中何事？</span>
        <span class="font-size-20px">松花酿酒，春水煎茶。</span>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.margin {
  margin: 20px 0;
}

.padding {
  padding: 20px 0;
}

.line-height-0 {
  line-height: 0;
}

.line-height-1 {
  line-height: 1;
}

.line-height-2 {
  line-height: 2;
}

.line-height-10px {
  line-height: 10px;
}

.line-height-20px {
  line-height: 20px;
}

.line-height-30px {
  line-height: 30px;
}

.line-height-40px {
  line-height: 40px;
}

.line-height-50px {
  line-height: 50px;
}

.vertical-align-30px {
  vertical-align: 30px;
}

.vertical-align--30px {
  vertical-align: -30px;
}

.font-size-14px {
  font-size: 14px;
}

.font-size-20px {
  font-size: 20px;
}

.inline-block {
  display: inline-block;
}
</style>

/************************/
<script>
const docHtml = "{{html}}";
const docCss = "{{css}}";

export default {
  data: () => ({
    html: docHtml.trim(),
    css: docCss.trim()
  })
};
</script>
