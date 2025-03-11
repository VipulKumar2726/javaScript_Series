// immediately Invoked Function Expression (IIFE)


(function chai() {
    console.log(`DB Connected`)
})();

( (name) => {
    console.log(`Db connected two ${name}`)
})('vipul')
