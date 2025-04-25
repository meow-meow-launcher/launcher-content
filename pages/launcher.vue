<template>
  <WindowWrapper title="Скачать лаунчер">
    <div class="launcher-wrapper" v-if="dataReady">
      <table class="launcher-table">
        <thead>
          <tr>
            <th colspan="3" class="table-title">
              ☕ Скачать лаунчер для сервера
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="icon-cell" rowspan="2">
              <img src="/icons/java-icon.png" alt="Java" />
              <img src="/icons/launcher-icon.png" alt="Launcher" />
            </td>
            <td class="label">📄 Файл:</td>
            <td><code>miaucraft-launcher.jar</code></td>
          </tr>
          <tr>
            <td class="label">💾 Размер:</td>
            <td>2.3 МБ</td>
          </tr>
          <tr>
            <td colspan="3" class="download-link">
              <a href="https://username.github.io/miaucraft-launcher.jar" target="_blank">
                📥 Нажмите здесь чтобы скачать лаунчер (.jar)
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="info">
              Требуется Java 17 или новее. Если лаунчер не запускается, проверьте установленную версию Java.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="launcher-wrapper">
      <div class="gradle-loader">
        <div class="console">
          <pre>{{ log }}</pre>
        </div>
      </div>
    </div>
  </WindowWrapper>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import WindowWrapper from '~/components/WindowWrapper.vue'

const dataReady = ref(false)

const log = ref('> Starting gradle build...\n')


onMounted(() => {
  const phases = [
    '> Configuring tasks...\n<==-----------> 10% CONFIGURING',
    '> Configuring dependencies...\n<======-------> 30% CONFIGURING',
    '> Initializing build environment\n<======-------> 50% BUILDING',
    '> Resolving project dependencies\n<========-----> 70% BUILDING',
    '> Finalizing build configuration\n<===========--> 90% BUILDING',
    '> Finalizing build configuration\n<=============> 100% BUILDING'
  ]

  const tasks = [
    '> Task :compileJava',
    '> Task :processResources',
    '> Task :classes',
    '> Task :jar'
  ]

  let phaseIndex = 0
  let taskIndex = 0

  const printNext = () => {
    if (phaseIndex < phases.length) {
      log.value += phases[phaseIndex] + '\n'
      phaseIndex++
    } else if (taskIndex < tasks.length) {
      log.value += tasks[taskIndex] + '\n'
      taskIndex++
    } else {
      clearInterval(timer)

      const failed = Math.random() < 0.01
      if (failed) {
        log.value += '\n> Task :compileJava FAILED\n'
        log.value += 'src/Main.java:42: error: cannot find symbol\n'
        log.value += '  someMissingFunction();\n'
        log.value += '  ^\n'
        log.value += 'symbol:   method someMissingFunction()\n'
        log.value += 'location: class Main\n\n'
        log.value += 'BUILD FAILED in 8s\n'
        log.value += '1 actionable task: 1 executed\n'
        buildFailed.value = true
      } else {
        log.value += '\nBUILD SUCCESSFUL in 7s\n'
        log.value += '4 actionable tasks: 4 executed\n'
        setTimeout(() => {
          dataReady.value = true
        }, 1000)
      }
    }

    nextTick(() => {
      if (consoleRef.value) {
        consoleRef.value.scrollTop = consoleRef.value.scrollHeight
      }
    })
  }

  const timer = setInterval(printNext, 800)
})
</script>


<style scoped>
.launcher-wrapper {
  padding: 8px;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 14px;
}

.launcher-table {
  width: 100%;
  border-collapse: collapse;
  background: #c0c0c0;
  table-layout: fixed;
}

.launcher-table td,
.launcher-table th {
  border: 2px outset #fff;
  padding: 6px;
  vertical-align: top;
}

.table-title {
  background: navy;
  color: white;
  font-weight: bold;
  padding-left: 8px;
  font-size: 15px;
  text-align: left;
}

.label {
  background: #dcdcdc;
  font-weight: bold;
  width: 100px;
  white-space: nowrap;
}

.icon-cell {
  width: 80px;
  text-align: center;
}

.icon-cell img {
  display: block;
  margin: 4px auto;
  width: 32px;
  height: 32px;
}

.download-link {
  background: #e0e0e0;
  text-align: center;
  font-weight: bold;
}

.download-link a {
  color: black;
  text-decoration: none;
}

.info {
  background: #dcdcdc;
  font-size: 13px;
}

.gradle-loader {
  background: black;
  color: lime;
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 2px inset #888;
  height: 200px;
  overflow-y: auto;
}

.console pre {
  margin: 0;
  white-space: pre-wrap;
}

</style>
