import React, { useState, useRef, useEffect, cloneElement } from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs'
import { motion, AnimatePresence } from 'framer-motion'

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import clj from "react-syntax-highlighter/dist/esm/languages/hljs/clojure";
import highlightStyle from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("clojure", clj);

const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}

const PanelList = ({ state, children }) => {
  const panelRef = useRef()
  const [height, set] = useState(0)
  const [activeIndex] = state
  const small = useMedia("(max-width: 1040px)");

  useEffect(() => {
    panelRef.current && set(panelRef.current.offsetHeight)
  }, [activeIndex, set])

  return (
    <motion.ul className='panel-list' animate={{ height }}>
      <AnimatePresence initial={false}>
        <motion.li
          ref={panelRef}
          className='panel'
          key={activeIndex}
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, transition: { delay: 0.1, ease: 'easeInOut', duration: 0.2 } }}
          exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 0.2 } }}
        >
          {cloneElement(children[activeIndex], { active: true })}
        </motion.li>
      </AnimatePresence>
    </motion.ul>
  )
}

const PanelListMob = ({ state, children }) => {
  const panelRef = useRef()
  const [height, set] = useState(0)
  const [activeIndex] = state
  const small = useMedia("(max-width: 1040px)");

  useEffect(() => {
    panelRef.current && set(panelRef.current.offsetHeight)
  }, [activeIndex, set])

  return (
    <motion.ul className='panel-list' animate={{ height }}>
      <AnimatePresence initial={false}>
        <motion.li
          ref={panelRef}
          className='panel'
          key={activeIndex}
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, transition: { delay: 0.1, ease: 'easeInOut', duration: 0.2 } }}
          exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 0.2 } }}
        >
          {cloneElement(children[activeIndex], { active: true })}
        </motion.li>
      </AnimatePresence>
    </motion.ul>
  )
}

const useMedia = (query) => {
  const [matches, setMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
   const media = window.matchMedia(query);
   if (media.matches !== matches) {
     setMatches(media.matches);
   }

   const listener = () => setMatches(media.matches);
   media.addListener(listener);

   return () => media.removeListener(listener);
  }, [query]);

  return matches; 
}

export default () => {
    const state = useState(0);
    const small = useMedia("(max-width: 1040px)");

    const JsPublish = `turtlequeue.publish({channel:'#news', payload: {msg:\'hello\', d: new Date()}})
      .then((data) => console.log(\'published to:\', data))`;
  
    const JsSubscribe = `turtlequeue.subscribe({channel:'#news'}, (err, data) => {
    console.log('received message', msg);
})`;
  
    const CljSubscribe = `(turtlequeue/subscribe driver {:channel "#news"}
                         (fn [err data metadata]
                           (println "data received" data)))
  `;
  
    const CljPublish = `(turtlequeue/publish driver {:channel "#news"
                               :payload {:msg "hello" :d (Date.)}}
                       (fn [err data metadata]
                         (println "publish " data)))`;

    const JsPublishMob = `turtlequeue.publish(
      {
      channel:'#news', payload: 
      { msg:'hello', d: new Date()}}
      ).then((data) => 
      console.log('published to:',
      data))`;
    
    const JsSubscribeMob = `turtlequeue.subscribe({channel:'
    #news'}, (err, data) => {
      console.log('received
    message', msg);
    })`

    const CljPublishMob = `(turtlequeue/publish driver {:
      channel "#news" :payload {:msg
      "hello" :d (Date.)}} (fn [err
      data metadata] (println "publish
       " data)))`;

    const CljSubscribeMob = `(turtlequeue/subscribe driver 
      {:channel "#news"}
      (fn [err data metadata]
      (println "data received" data)))
`;

  return (
    <Tabs state={state}>
      <div className='home-code'>
        <div className='home-code__headline'>
            <h5 className="home-code__title">Overview</h5>

            <div className="home-code__control">
                <Tab>JS</Tab>
                <Tab>CLJ</Tab>
            </div>
        </div>

          {small ? <PanelList state={state}>
            <Panel>
              <SyntaxHighlighter language="javascript" style={highlightStyle}>
                {JsPublishMob}
              </SyntaxHighlighter>

              <SyntaxHighlighter language="javascript" style={highlightStyle}>
                {JsSubscribeMob}
              </SyntaxHighlighter>
            </Panel>

            <Panel>
              <SyntaxHighlighter language="javascript" style={highlightStyle}>
                {CljPublishMob}
              </SyntaxHighlighter>

              <SyntaxHighlighter language="javascript" style={highlightStyle}>
                {CljSubscribeMob}
              </SyntaxHighlighter>
            </Panel>
          </PanelList> : 

          <PanelListMob state={state}>
          <Panel>
            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {JsPublish}
            </SyntaxHighlighter>

            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {JsSubscribe}
            </SyntaxHighlighter>
          </Panel>

          <Panel>
            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {CljPublish}
            </SyntaxHighlighter>

            <SyntaxHighlighter language="javascript" style={highlightStyle}>
              {CljSubscribe}
            </SyntaxHighlighter>
          </Panel>
          </PanelListMob> }

      </div>
      
      <a href={`${state[0] === 0 ? '/doc/latest/js_sdk.html' : '/doc/latest/clj_sdk.html'}`} className="home__link">Get started</a>
    </Tabs>
  )
}