const showRelogio = () => {
    const relogio = document.getElementById('relogio')
    const cronometro = document.getElementById('cronometro')
    const temporizador = document.getElementById('temporizador')

    relogio.classList.remove('hidden')
    setTimeout(() => {
        relogio.classList.remove('opacity-0')
    }, 200)

    cronometro.classList.add('opacity-0')
    cronometro.classList.add('hidden')

    temporizador.classList.add('opacity-0')
    temporizador.classList.add('hidden')
}

const showCronometro = () => {
    const relogio = document.getElementById('relogio')
    const cronometro = document.getElementById('cronometro')
    const temporizador = document.getElementById('temporizador')

    relogio.classList.add('opacity-0')
    relogio.classList.add('hidden')

    cronometro.classList.remove('hidden')
    setTimeout(() => {
        cronometro.classList.remove('opacity-0')
    }, 200)

    temporizador.classList.add('opacity-0')
    temporizador.classList.add('hidden')
}

const showTemporizador = () => {
    const relogio = document.getElementById('relogio')
    const cronometro = document.getElementById('cronometro')
    const temporizador = document.getElementById('temporizador')

    relogio.classList.add('opacity-0')
    relogio.classList.add('hidden')

    cronometro.classList.add('opacity-0')
    cronometro.classList.add('hidden')

    temporizador.classList.remove('hidden')
    setTimeout(() => {
        temporizador.classList.remove('opacity-0')
    }, 200)
}

export default { showRelogio, showCronometro, showTemporizador }