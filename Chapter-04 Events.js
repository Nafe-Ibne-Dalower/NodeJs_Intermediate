const EventEmitter = require("events");
const emitter = new EventEmitter();
const Security = require('./Chapter-01.1 mod')
const alert = new Security()
// registering an event
emitter.on('Security_Alert1',(passing_time)=>{
    console.log(`Security has been suppressed & ${passing_time}...`)
})
emitter.on('Security_Alert2',({passing_time,expression})=>{
    console.log(`Security has been suppressed & ${passing_time} ${expression}...`)
})
emitter.on('Security_is_on',()=>{
    console.log('Security is activated...')
});

// raising an event
emitter.emit('Security_is_on')
emitter.emit('Security_Alert1','first time deprecated') // It is before bacuse event raised after 'Security_is_on'
emitter.emit('Security_Alert2',{
    passing_time: 'first',
    expression: 'deprecated'
})

// registering an event
alert.on('Security_fix',()=>{
    console.log('Security Problems have been fixed by mod.js🎉🎉🎉...')
});

alert.startevent()
/**************** End ****************/