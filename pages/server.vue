<template>
  <WindowWrapper title="Информация о сервере">
    <div class="server-wrapper">
      <table class="server-table">
        <thead>
          <tr>
            <th colspan="2" class="table-title">🖥 О сервере</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label">🌐 IP</td>
            <td><code>postthismiaumiaueveryweek.falixsrv.me:56563</code></td>
          </tr>
          <tr>
            <td class="label">🌐 Webmap</td>
            <td><code>http://postthismiaumiaueveryweek.falixsrv.me:21352</code></td>
          </tr>
          <tr>
            <td class="label">📦 Версия</td>
            <td>1.19.2 [Forge 43.5.0]</td>
          </tr>
          <tr>
            <td class="label">⚙ Моды</td>
            <td>Create, Ice and Fire</td>
          </tr>
          <tr>
            <td colspan="2" class="info">
              Сервер работает на <b>Forge</b>. Для подключения скачайте сборку с Modrinth.
            </td>
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
.server-wrapper {
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.server-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 14px;
  background: #c0c0c0;
  /* УДАЛИ или закомментируй: */
  /* table-layout: fixed; */
}

.server-table td,
.server-table th {
  border: 2px outset #fff;
  padding: 6px;
  vertical-align: top;
}

.table-title {
  background: navy;
  color: white;
  font-weight: bold;
  text-align: left;
  padding-left: 8px;
  font-size: 15px;
}

.label {
  background: #dcdcdc;
  font-weight: bold;
  width: 120px;
  white-space: nowrap;
}

.info {
  background: #e0e0e0;
  font-size: 13px;
  padding: 10px;
}
</style>
