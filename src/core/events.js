/*
* @Author: giserpan
* @Date:   2018-10-16 17:43:24
* @Last Modified by:   giserpan
* @Last Modified time: 2018-10-23 14:59:54
*/
//inspire by https://github.com/openlayers/openlayers

export function bindListener(listenerObj){
	const boundListener = function(evt) {
    const listener = listenerObj.listener;
    const bindTo = listenerObj.bindTo || listenerObj.target;
    
    return listener.call(bindTo, evt);
  };
  listenerObj.boundListener = boundListener;
  return boundListener;
}

export function listen(target, type, listener, opt_this) {
	const listenerMap = getListenerMap(target, true);
	let listeners = listenerMap[type];
	if (!listeners) {
		listeners = listenerMap[type] = [];
	}
	let listenerObj=findListener(listeners,listener,opt_this);
	if(listenerObj){

	}else{
		listenerObj={
			bindTo:opt_this,
			target:target,
			type:type,
			listener:listener
		}
		target.addEventListener(type, bindListener(listenerObj));
		listeners.push(listenerObj);
	}
	return listenerObj;
	
}

/**
 * [getListenerMap ]
 * @param  {[type]} target [Target]
 * @param  {[type]} opt_create [opt_create If a map should be created if it doesn't exist]
 * @return {[type]} [return listener map]
 */
function getListenerMap(target, opt_create) {
  let listenerMap = target.vge_lm;
  if (!listenerMap && opt_create) {
    listenerMap = target.vge_lm = {};
  }
  return listenerMap;
}

export function findListener(listeners, listener, opt_this) {
  let listenerObj;
  for (let i = 0, ii = listeners.length; i < ii; ++i) {
    listenerObj = listeners[i];
    if (listenerObj.listener === listener &&
        listenerObj.bindTo === opt_this) {
      return listenerObj;
    }
  }
  return undefined;
}