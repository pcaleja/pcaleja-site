<template lang='pug'>
  div(class='p-case-studies')
    h1(class='h1') NYON Dash
    p The NYON Dash is the internal admin dashboard used by staff to manage flights, products, orders, discounts, etc..

    figure
      img(src='/screen-nyon-dash-flights.jpg' alt='NYON Dash Flight Board')

    figure
      img(src='/screen-nyon-dash-products.jpg' alt='NYON Dash Products Board')

    figure
      img(src='/screen-nyon-dash-product.jpg' alt='NYON Dash Product View')

    figure
      img(src='/screen-nyon-dash-product-form.jpg' alt='NYON Dash Product Form')
</template>

<script>
  export default {

  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .p-case-studies {
    background: $primary;
    color: $light;
    padding: 1rem;

    h1 {
      color: $secondary;
    }

    figure {
      margin-top: 2rem;
    }
  }
</style>
