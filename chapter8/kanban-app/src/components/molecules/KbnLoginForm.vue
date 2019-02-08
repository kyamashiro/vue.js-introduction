<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例:kanban@domain.com"
        @focus="resetError"
      >
      <ul class="validation-errors">
        <li v-if="!validation.email.format">
          メールアドレスの形式が不正です｡
        </li>
        <li v-if="!validation.email.required">
          メールアドレスが入力されていません｡
        </li>
      </ul>
    </div>
    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例:xxxxxxxx"
        @focus="resetError"
      >
      <ul class="validation-errors">
        <li v-if="!validation.password.required">
          パスワードが入力されていません｡
        </li>
      </ul>
    </div>
    <div class="form-actions">
      <KbnButton
        :disabled="disableLoginAction"
        @click="handleClick"
      >

      </KbnButton>
    </div>
  </form>
</template>
