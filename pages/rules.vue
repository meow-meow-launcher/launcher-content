<template>
  <WindowWrapper title="Правила сервера">
    <div class="rules-wrapper">
      <table class="rules-table">
        <thead>
          <tr>
            <th class="icon-header"></th>
            <th>Правило</th>
            <th>Наказание</th>
          </tr>
        </thead>
        <tbody>
          <!-- Общие правила -->
          <tr>
            <th colspan="3" class="sub-header">Общие правила</th>
          </tr>
          <tr>
            <td class="icon-cell">❌</td>
            <td>Запрещено гриферство, кража и порча построек.</td>
            <td>Бан 3-7 дней</td>
          </tr>
          <tr>
            <td class="icon-cell">🤝</td>
            <td>Уважайте игроков, избегайте токсичного поведения.</td>
            <td>Мут или предупреждение</td>
          </tr>
          <tr>
            <td class="icon-cell">🧱</td>
            <td>Старайтесь строить красиво и по теме мира.</td>
            <td>Устное замечание</td>
          </tr>
          <tr>
            <td class="icon-cell">💬</td>
            <td>Не спамьте в чат и не оскорбляйте других.</td>
            <td>Мут до 1 часа</td>
          </tr>
          <tr>
            <td class="icon-cell">🚫</td>
            <td>Не используйте баги/читы/макросы.</td>
            <td>Перманентный бан</td>
          </tr>

          <!-- Create -->
          <tr>
            <th colspan="3" class="sub-header">Мод: Create</th>
          </tr>
          <tr>
            <td class="icon-cell">⚙️</td>
            <td>Автоматика Create должна быть компактной и не нагружать сервер.</td>
            <td>Удаление схемы</td>
          </tr>
          <tr>
            <td class="icon-cell">📦</td>
            <td>Избегайте бесконечных циклов и неэффективных линий.</td>
            <td>Удаление механизма</td>
          </tr>
          <tr>
            <td class="icon-cell">🚂</td>
            <td>Поезда Create не должны мешать другим игрокам.</td>
            <td>Удаление поезда</td>
          </tr>
          <tr>
            <td class="icon-cell">⚡</td>
            <td>Не загромождайте базу тяжёлыми вращающимися элементами.</td>
            <td>Отключение источников</td>
          </tr>

          <!-- Ice and Fire -->
          <tr>
            <th colspan="3" class="sub-header">Мод: Ice and Fire</th>
          </tr>
          <tr>
            <td class="icon-cell">🐉</td>
            <td>Драконов держите под контролем, не выпускайте в деревнях и городах.</td>
            <td>Убийство дракона</td>
          </tr>
          <tr>
            <td class="icon-cell">🔥</td>
            <td>Запрещено использовать огонь дракона для гриферства.</td>
            <td>Бан 1-3 дня</td>
          </tr>
          <tr>
            <td class="icon-cell">🧊</td>
            <td>Не заспамливайте мир структурами мода Ice and Fire.</td>
            <td>Удаление построек</td>
          </tr>
          <tr>
            <td class="icon-cell">🪓</td>
            <td>Запрещено без необходимости призывать опасных мобов.</td>
            <td>Варн или изъятие предметов</td>
          </tr>

          <!-- Telegram -->
          <tr>
            <th colspan="3" class="sub-header">Telegram-канал</th>
          </tr>
          <tr>
            <td class="icon-cell">📢</td>
            <td>Не флудите и не используйте капс в комментариях.</td>
            <td>Тайм-аут или удаление</td>
          </tr>
          <tr>
            <td class="icon-cell">🔗</td>
            <td>Не кидайте ссылки без согласования с администрацией.</td>
            <td>Удаление сообщения</td>
          </tr>
          <tr>
            <td class="icon-cell">🗯️</td>
            <td>Оскорбления и угрозы в чате Telegram запрещены.</td>
            <td>Блокировка</td>
          </tr>
          <tr>
            <td class="icon-cell">📰</td>
            <td>Старайтесь соблюдать тематику — пишите по делу.</td>
            <td>Удаление сообщения</td>
          </tr>
        </tbody>
      </table>
    </div>
  </WindowWrapper>
</template>

<script setup>
import WindowWrapper from '~/components/WindowWrapper.vue'
</script>

<style scoped>
.rules-wrapper {
  padding: 6px;
  box-sizing: border-box;
  font-family: 'MS Sans Serif', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

.rules-table {
  width: auto;
  height: auto;
  border-collapse: collapse;
  background: #c0c0c0;
  font-size: 14px;
  box-shadow: inset -1px -1px #fff, inset 1px 1px #808080;
  border: 2px outset #fff;
}

.rules-table th,
.rules-table td {
  padding: 8px;
  border: 2px inset #fff;
  vertical-align: middle;
  word-break: break-word;
}

.rules-table th {
  background: navy;
  color: white;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
}

.sub-header {
  background: #000080;
  color: white;
  font-size: 14px;
  text-align: left;
  padding-left: 10px;
}

.rules-table td {
  padding: 8px;
  border: 2px inset #fff;
  vertical-align: middle;
}

.icon-header {
  width: 40px;
}

.icon-cell {
  text-align: center;
  font-size: 18px;
}
</style>

