<template lang='pug'>
  div
    vue-form(
      class='c-form'
      :name='formName'
      netlify
      netlify-honeypot='zipcode'
      @submit.prevent='handleSubmit()'
      :state='formState'
      v-if='!isSubmitted'
      show-messages='$dirty || $touched || $submitted'
    )

      div
        input(
          type='hidden'
          name='form-name'
          :value='formName'
        )

      div
        input(
          v-show='false'
          name='zipcode'
        )

      div(class='c-form__item')
        validate
          label(
            for='name'
            class='c-form__label'
          ) Full Name
          input(
            id='name'
            name='name'
            type='text'
            v-model='state.name'
            required
          )
          field-messages(
            class='c-form__error'
            name='name'
          )
            div(slot='required') This field is required

      div(class='c-form__item')
        validate
          label(
            for='email'
            class='c-form__label'
          ) Email
          input(
            id='email'
            name='email'
            type='email'
            v-model='state.email'
            required
          )
          field-messages(
            class='c-form__error'
            name='email'
          )
            div(slot='required') This field is required

      div(class='c-form__item')
        validate
          label(
            for='message'
            class='c-form__label'
          ) Message
          textarea(
            id='message'
            name='message'
            v-model='state.message'
            rows='4'
            required
          )
          field-messages(
            class='c-form__error'
            name='message'
          )
            div(slot='required') This field is required

      div(class='c-form__item c-form__submit')
        button(type='submit') Send

    div(v-else)
      p Thank you for inquiring!
      p I'll get back to you shortly.
</template>

<script>
  import axios from 'axios'
  import VueForm from 'vue-form'

  export default {
    mixins: [
      VueForm
    ],

    data () {
      return {
        isSubmitted: false,
        onChangeColor: '#B8B8B8',
        formName: 'contact',
        formState: {},
        state: {
          email: '',
          name: '',
          message: ''
        }
      }
    },

    methods: {
      handleSubmit () {
        if (this.formState.$invalid) return
        axios('/', {
          method: 'post',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: this.encode({ 'form-name': this.formName, ...this.state })
        }).then(() => { this.isSubmitted = true })
          .catch((error) => console.log(error))
      },

      encode (data) {
        return Object.keys(data)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join('&')
      }
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-form {
    margin: auto;
    text-align: left;

    @include breakpoint(sm) {
      margin: 0;
    }

    @include field-input-placeholder {
      color: $light-off-2;
    }

    &__item {
      position: relative;
      margin-top: 2rem;
    }

    &__submit {
      @include breakpoint(sm) {
        text-align: right;
      }

      button {
        @extend %button;
        padding: 0.5rem 2rem;
      }
    }

    &__label {
      color: $light;
      white-space: nowrap;
      margin-bottom: 0.25rem;
      display: block;
    }

    &__error {
      @include font-size(12);
      text-align: left;
      color: $light;
      position: absolute;
      top: 2px;
      right: 0.25rem;;

      div {
        background: $danger;
        padding: 0.25rem;
        border-radius: 4px 4px 0 0;
      }
    }

    input,
    select,
    textarea {
      @extend %font-merriweather-sans;
      @include font-size(14);
      width: 100%;
      padding: 0.5rem;
      appearance: none;
      box-sizing: border-box;
      outline: 0;
      border: 2px solid $light;
      background: transparent;
      border-radius: 5px;
      color: $dark-off-2;
      background: $light;
      line-height: 1;

      &:focus {
        border-color: lighten($secondary, 25%);
      }

      &:hover {
        border-color: $secondary;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: $light;
        transition: background-color 5000s ease-in-out 0s;
        border-color: lighten($primary, 25%);
      }
    }

    select {
      cursor: pointer;
      background-image:
        linear-gradient(-135deg, $light 49%, transparent 50%),
        linear-gradient(135deg, $light 49%, transparent 50%);
      background-position:
        calc(100% - 14px) calc(1rem - 5px),
        calc(100% - 8px) calc(1rem - 5px);
      background-size:
        6px 6px,
        6px 6px;
      background-repeat: no-repeat;

      &:hover {
        background-image:
          linear-gradient(-135deg, $primary 49%, transparent 50%),
          linear-gradient(135deg, $primary 49%, transparent 50%);
      }

      &:focus {
        background-image:
          linear-gradient(-135deg, lighten($primary, 25%) 49%, transparent 50%),
          linear-gradient(135deg, lighten($primary, 25%) 49%, transparent 50%);
      }
    }

    .vf-field-valid {

      input,
      select,
      textarea {
        border-color: lighten($primary, 25%);
      }
    }
  }
</style>
