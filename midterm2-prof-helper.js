/* Professor-practice-style original Midterm 2 additions (no questions or figures copied).
   Each concept has four freshly written, clinically distinct stems focused on the
   same measurable learning objective. The website shuffles all answer choices. */
(function(){'use strict';
const mapping={
 BG:'Basal Ganglia & Circuitry',CB:'Cerebellum & Circuitry',AT:'Ataxia',
 NM:'Motor Neuron Disorders: Lower Motor Neuron / Junction',ALS:'Motor Neuron Disorders: ALS and Upper Motor Neuron Disorders',
 NO:'Nasal & Oral Cavities',PL:'Pharynx & Larynx',HY:'Hypokinetic Movement Disorders',
 HK:'Hyperkinetic Movement Disorders',TR:'Tremor and Other Movement Disorders',TX:'Treatment of Movement Disorders',
 EAR:'Ear Anatomy & Neurophysiology',VEST:'Vestibular Anatomy & Neurophysiology',VERT:'Dizziness & Vertigo',
 EYE:'Structures of the Eye and Retina',VF:'Visual Fields & Deficits',
 EOM:'Extra-Ocular Movements & Oculomotion Neuropathies',AUTO:'Sympathetics and Parasympathetics of the Eye',
 NY:'Nystagmus',TASTE:'Taste and Smell',GL:'Glaucoma',HEAR:'Hearing Loss and Evaluation',
 RET:'Retinopathy / Macular Degeneration',EXAM:'Basic Eye and Orbit Exam',
 M:'Anatomy Lab: Midline Cavities',LE:'Anatomy Lab: Eye',LR:'Anatomy Lab: Ear'
};
const stats={concepts:0,items:0,byTopic:{}};
window.NP2_PROF_STATS=stats;
window.NP2_PROF_ADD=function(topicCode,answer,wrong,stems,explanation,takeaway,visual){
 const topic=mapping[topicCode]; if(!topic)throw Error('Unknown topic '+topicCode);
 if(!Array.isArray(wrong)||wrong.length!==4||!Array.isArray(stems)||stems.length!==4)throw Error('Expected 4 wrong options and 4 stems for '+topic);
 const answers=[answer,...wrong.map(x=>x[0])];
 if(new Set(answers).size!==5)throw Error('Duplicate option in '+topic+' / '+answer);
 for(const [i,stem] of stems.entries()){
  if(stem.trim().length<45||!/\?$/.test(stem.trim()))throw Error('Weak or incomplete case '+topic+' / '+stem);
  const why=[explanation,...wrong.map(x=>x[1])];
  if(why.some(x=>String(x||'').length<18))throw Error('Explanations too short for '+topic+' / '+answer);
  const level=[1,2,2,3][i];
  window.NP2_ADD(topic,level,stem,answers.join('|'),0,why.join('|'),explanation,takeaway,
   'Localize the mechanism and compare the prediction with each competing option.',visual||null);
  const latest=window.NP2_BANK[window.NP2_BANK.length-1];latest.profStyle=true;
 }
 stats.concepts++;
 stats.items+=4;
 stats.byTopic[topic]=(stats.byTopic[topic]||0)+4;
};
})();
