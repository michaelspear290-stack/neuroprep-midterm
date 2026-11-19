/* NeuroPrep Midterm 2: independently authored questions aligned to Weeks 4–5 and 2026 student blueprint. */
(()=>{
'use strict';
const defs=[
['Basal Ganglia & Circuitry',3,4],['Cerebellum & Circuitry',2,4],['Ataxia',3,4],
['Motor Neuron Disorders: Lower Motor Neuron / Junction',2,4],
['Motor Neuron Disorders: ALS and Upper Motor Neuron Disorders',2,4],
['Nasal & Oral Cavities',2,4],['Pharynx & Larynx',2,4],
['Hypokinetic Movement Disorders',1,4],['Hyperkinetic Movement Disorders',2,4],
['Tremor and Other Movement Disorders',2,4],['Treatment of Movement Disorders',1,4],
['Ear Anatomy & Neurophysiology',3,5],['Vestibular Anatomy & Neurophysiology',2,5],
['Dizziness & Vertigo',3,5],['Structures of the Eye and Retina',4,5],
['Visual Fields & Deficits',3,5],['Extra-Ocular Movements & Oculomotion Neuropathies',2,5],
['Sympathetics and Parasympathetics of the Eye',1,5],
['Nystagmus',1,5],['Taste and Smell',1,5],['Glaucoma',1,5],
['Hearing Loss and Evaluation',3,5],['Retinopathy / Macular Degeneration',2,5],
['Basic Eye and Orbit Exam',2,5],
['Anatomy Lab: Midline Cavities',3,5],['Anatomy Lab: Eye',3,5],['Anatomy Lab: Ear',3,5]
];
window.NP2_BLUEPRINT=defs.map(([topic,count,week])=>({topic,count,week}));
window.NP2_BANK=[];
window.NP2_ADD=function(topic,level,stem,options,answer,why,explanation,takeaway,hint,visual){
 const os=options.split('|'),ws=why.split('|');
 if(os.length!==5||ws.length!==5||answer<0||answer>4)throw Error('Invalid options: '+topic+' '+stem.slice(0,30));
 const d=window.NP2_BLUEPRINT.find(x=>x.topic===topic);if(!d)throw Error('Unknown topic '+topic);
 window.NP2_BANK.push({id:'M2-'+String(window.NP2_BANK.length+1).padStart(3,'0'),week:d.week,topic,level,stem,options:os,answer,why:ws,explanation,takeaway,hint,visual:visual||null});
};
const A=window.NP2_ADD;
const BG='Basal Ganglia & Circuitry',CB='Cerebellum & Circuitry',AT='Ataxia',NM='Motor Neuron Disorders: Lower Motor Neuron / Junction',ALS='Motor Neuron Disorders: ALS and Upper Motor Neuron Disorders',NO='Nasal & Oral Cavities',PL='Pharynx & Larynx',HY='Hypokinetic Movement Disorders',HK='Hyperkinetic Movement Disorders',TR='Tremor and Other Movement Disorders',TX='Treatment of Movement Disorders';
A(BG,2,'A 56-year-old has a small lesion that selectively reduces the activity of striatal D1 receptor-expressing projection neurons. Which downstream change best explains impaired initiation of desired movement?',
'Increased GPi/SNr inhibitory output to motor thalamus|Decreased GPi/SNr inhibitory output to motor thalamus|Increased thalamocortical excitatory drive|Loss of excitatory cortical input to the striatum|Reduced activity of the subthalamic nucleus',
0,'The direct pathway normally inhibits GPi/SNr; impairing it removes that inhibition and increases thalamic suppression.|Reduced GPi/SNr output would disinhibit the thalamus and facilitate movement.|More thalamic excitation is the opposite expected net effect.|The stem specifies loss of D1 striatal neuronal output, not cortical input.|The direct pathway can influence GPi/SNr without requiring reduced STN activity.',
'The direct pathway inhibits the tonically inhibitory GPi/SNr, thereby releasing motor thalamus from inhibition. Weakening the direct pathway allows GPi/SNr to inhibit thalamus more strongly.',
'Direct pathway is GO: striatum (GABA) inhibits GPi/SNr, which disinhibits the thalamus.',
'Trace the sign of each synapse instead of memorizing GO and NOGO.');
A(BG,3,'A patient loses dopamine-producing neurons in the substantia nigra pars compacta. The GPi becomes excessively active and thalamic excitation of cortex falls. Which combination of striatal effects best accounts for these findings?',
'Decreased D1 direct-pathway activity and increased D2 indirect-pathway activity|Increased D1 direct-pathway activity and decreased D2 indirect-pathway activity|Increased D1 and increased D2 pathway activity|Decreased D1 and decreased D2 pathway activity|No change in striatal pathways because dopamine acts only in the thalamus',
0,'Dopamine stimulates D1 GO and inhibits D2 NOGO; dopamine loss weakens GO and strengthens NOGO.|This is what dopamine replacement tends to promote, not depletion.|Dopamine does not normally stimulate both striatal pathways.|Dopamine depletion does not suppress both pathways equally.|Nigrostriatal dopamine acts strongly on striatal D1 and D2 receptors.',
'Nigrostriatal dopamine normally facilitates motion in two ways: activates D1 direct-pathway neurons and suppresses D2 indirect-pathway neurons. Its loss increases inhibitory basal-ganglia output.',
'Dopamine loss in Parkinson disease increases net GPi/SNr inhibition of motor thalamus.',
'Think of what dopamine does to each striatal receptor class in the healthy state.');
A(BG,2,'A 70-year-old develops violent flinging movements of the left arm and leg after a right-sided lacunar stroke. The movements cannot be voluntarily suppressed. Which site is most characteristically implicated?',
'Right subthalamic nucleus|Left subthalamic nucleus|Right dentate nucleus|Left substantia nigra pars compacta|Right hippocampal formation',
0,'A right STN lesion can cause contralateral left hemiballismus by reducing excitatory drive to GPi.|A left STN injury classically affects right-sided limbs.|Dentate lesions produce cerebellar incoordination rather than classic hemiballismus.|SNc dopamine loss produces hypokinetic Parkinsonian signs.|Hippocampal damage predominantly impairs memory.',
'The subthalamic nucleus normally excites GPi, helping suppress unwanted movements. Damage reduces GPi inhibition of thalamic motor circuits and can cause contralateral hemiballismus.',
'STN lesion → contralateral hemiballismus.',
'Look for a basal-ganglia node whose output is excitatory, not inhibitory.');
A(CB,1,'In a cerebellar circuit, which cell is the principal inhibitory output neuron of the cerebellar cortex?',
'Purkinje cell|Granule cell|Mossy fiber|Climbing fiber|Dentate projection neuron',
0,'Purkinje neurons use GABA to inhibit deep cerebellar or vestibular nuclei.|Granule neurons excite Purkinje dendrites through parallel fibers.|Mossy fibers provide excitatory afferent input.|Climbing fibers provide excitatory afferent input from inferior olive.|Dentate neurons are deep-nuclear output, not cortical output neurons.',
'Purkinje cells integrate parallel and climbing-fiber signals and provide GABAergic inhibition of deep cerebellar nuclei, which coordinate outgoing motor corrections.',
'Purkinje = inhibitory cerebellar cortical output; deep nuclei relay most cerebellar output.',
'Separate inputs to cerebellar cortex from its output cells.');
A(CB,2,'A lesion disconnects the major efferent route from the dentate nucleus toward the contralateral red nucleus and thalamus. Which cerebellar peduncle is most directly affected?',
'Superior cerebellar peduncle|Middle cerebellar peduncle|Inferior cerebellar peduncle|Medial longitudinal fasciculus|Cerebral peduncle',
0,'The superior cerebellar peduncle is the principal route for deep nuclear efferents toward midbrain and thalamus.|Middle peduncle primarily brings pontocerebellar afferents.|Inferior peduncle carries many spinal, medullary, and vestibular inputs.|MLF coordinates vestibulo-ocular circuits, not the major dentate efferent route.|Cerebral peduncle contains descending cortical fibers outside the cerebellar peduncle system.',
'The dentate nucleus sends motor-planning signals through the superior cerebellar peduncle, with decussation to contralateral thalamic and midbrain targets.',
'Superior peduncle: cerebellar output; middle: pontine input; inferior: many spinal/vestibular inputs.',
'Which peduncle conveys the dominant output from deep cerebellar nuclei?');
A(AT,2,'A patient with progressive imbalance sways markedly after closing the eyes while standing feet together. She has impaired vibration and great-toe position sense, but normal finger-to-nose coordination when looking at her hand. Which type of ataxia is most likely?',
'Sensory ataxia|Midline cerebellar ataxia|Vestibular ataxia|Motor cortex weakness|Basal ganglia bradykinesia',
0,'Loss of conscious proprioception with visual compensation and a positive Romberg favors sensory ataxia.|Vermis lesions usually cause truncal instability even with eyes open.|Vestibular ataxia more often includes vertigo, nystagmus, or lateral veering.|Weakness rather than impaired proprioception dominates motor cortex lesions.|Bradykinesia concerns movement initiation and speed rather than dependence on visual sensory feedback.',
'Because the patient relies on vision to compensate for loss of proprioception, closing the eyes markedly worsens stance. Dorsal-column/peripheral large-fiber dysfunction is likely.',
'Positive Romberg plus proprioceptive loss → sensory ataxia.',
'Consider which sensory input disappears when the eyes close.');
A(AT,3,'A right cerebellar hemisphere lesion causes right arm dysmetria, intention tremor, and dysdiadochokinesia without major weakness. Why do these findings usually appear on the lesion side?',
'Cerebellar output to motor cortex and corticospinal projections cross in ways yielding an ipsilateral body effect|Corticospinal axons do not cross the medulla|Cerebellar neurons synapse directly on ipsilateral muscle fibers|The thalamus projects only to the same-side spinal cord|The cerebellum sends no information through the thalamus',
0,'Cerebellothalamic output generally crosses, followed by crossed corticospinal descent, resulting in mostly ipsilateral cerebellar signs.|The lateral corticospinal tract does cross at the pyramids.|Cerebellar neurons do not innervate skeletal muscle directly.|Thalamic motor output feeds cortex rather than descending directly to spinal cord.|Dentatothalamic projections are an important cerebellar output.',
'Many cerebellar motor effects involve two crossings: efferent cerebellar output toward the opposite motor cortex and corticospinal fibers descending to the original body side.',
'Cerebellar limb signs are usually ipsilateral to the damaged hemisphere.',
'Count the crossings along the cerebellum → motor cortex → spinal cord path.');
A(AT,2,'An adult has new vertigo, horizontal nystagmus, and a tendency to veer left while walking; limb vibration and joint position sense are preserved. Which system is most likely driving the imbalance?',
'Vestibular pathways|Dorsal columns|Primary motor cortex|Neuromuscular junction|Visual association cortex',
0,'Vertigo with nystagmus and veering suggests an asymmetric vestibular signal.|Dorsal-column loss causes proprioceptive sensory ataxia, especially with eyes closed.|Cortical motor lesions typically cause contralateral weakness and UMN signs.|NMJ disorders cause fatigable weakness without primary vertigo.|Visual association dysfunction does not usually produce this characteristic vestibular syndrome.',
'Vestibular ataxia combines disordered perception of motion, nystagmus, and unstable gait; sensory ataxia is driven by impaired position sense.',
'Ataxia + vertigo/nystagmus → consider vestibular dysfunction.',
'Distinguish inaccurate sensory position information from asymmetric balance-organ signaling.');
A(NM,2,'A 28-year-old has fluctuating ptosis and diplopia that worsen by evening and improve after rest. Repetitive nerve stimulation shows a decremental response. Which mechanism best explains the weakness?',
'Antibodies impair postsynaptic nicotinic acetylcholine receptor function|Antibodies block presynaptic P/Q-type calcium channels|Progressive degeneration of anterior horn alpha motor neurons|Loss of CNS oligodendrocyte myelin|Botulinum toxin cleavage of presynaptic SNARE proteins',
0,'Myasthenia gravis impairs postsynaptic NMJ transmission, typically through ACh receptor antibodies.|P/Q calcium-channel antibodies cause Lambert-Eaton syndrome, often with reduced reflexes and facilitation.|Anterior horn injury causes chronic LMN weakness and atrophy rather than classic fatigable ocular weakness.|CNS demyelination causes different central neurologic signs.|Botulinum toxicity prevents vesicle fusion and has another clinical context.',
'The decremental muscle response during repetitive stimulation reflects failure of postsynaptic neuromuscular transmission as available safety factor declines.',
'MG: fatigable ocular/bulbar weakness, postsynaptic AChR antibodies, decrement on stimulation.',
'Determine whether the defect is presynaptic release or postsynaptic responsiveness.');
A(NM,3,'A 62-year-old smoker has proximal weakness and dry mouth. Reflexes are diminished at rest but temporarily improve after a brief maximal contraction. Which explanation fits best?',
'Antibodies against presynaptic voltage-gated calcium channels decrease acetylcholine release|Autoimmune loss of postsynaptic acetylcholine receptors increases release after exercise|Myosin antibodies cause irreversible muscle fiber necrosis|Corticospinal tract damage causes exercise-induced reflex facilitation|Inherited loss of dystrophin causes neuromuscular transmission failure',
0,'Lambert-Eaton syndrome impairs presynaptic P/Q-type calcium-dependent ACh release; activity can temporarily increase release.|Postsynaptic AChR loss is MG, which classically fatigues with activity.|Myosin autoimmunity is not the classic cause of facilitation with autonomic complaints.|UMN lesions cause hyperreflexia, not depressed reflexes with short-lived facilitation.|Dystrophinopathy causes muscle degeneration, not this presynaptic NMJ pattern.',
'Repeated activity can accumulate presynaptic calcium, partially overcoming impaired calcium-channel function in Lambert-Eaton syndrome.',
'LEMS: proximal weakness, autonomic symptoms, hyporeflexia, and post-exercise facilitation; consider small-cell lung cancer.',
'Which NMJ disorder can improve transiently after repeated nerve activity?');
A(ALS,2,'A 60-year-old has progressive asymmetric hand weakness, fasciculations, hyperreflexia, and extensor plantar responses. Sensory examination is intact. Which mechanism most plausibly unifies the findings?',
'Degeneration of upper and lower motor neurons|Selective destruction of dorsal root ganglia|Postsynaptic blockade of ACh receptors|Cerebellar Purkinje cell destruction|Dopamine depletion restricted to the putamen',
0,'ALS affects UMN and LMN systems, causing hyperreflexia together with atrophy/fasciculations and usually spared sensation.|DRG disease produces sensory loss and ataxia.|Myasthenia causes fatigable weakness without UMN signs.|Cerebellar injury causes dysmetria rather than both UMN/LMN findings.|Dopaminergic basal ganglia loss causes rigidity/bradykinesia, not classic mixed motor neuron signs.',
'Mixed UMN signs (brisk reflexes, Babinski) and LMN signs (fasciculations, atrophy) across regions, without major sensory loss, strongly suggest ALS.',
'ALS combines UMN and LMN degeneration while generally sparing primary sensory pathways.',
'Separate upper motor neuron signs from lower motor neuron signs.');
A(ALS,2,'A patient suspected of having ALS undergoes electrodiagnostic testing. Which result most directly supports active and chronic lower-motor-neuron loss rather than an isolated upper motor neuron syndrome?',
'Fibrillation potentials with chronic neurogenic motor-unit changes on needle EMG|Normal motor-unit morphology with brisk knee reflexes|Isolated sensory nerve action potential loss|Purely delayed visual evoked potentials|Transient increment on high-frequency repetitive stimulation',
0,'Active denervation and chronic reinnervation on needle EMG support LMN degeneration.|Brisk reflexes alone demonstrate UMN dysfunction but not LMN injury.|Sensory nerve abnormalities instead suggest a peripheral sensory process.|Visual evoked potentials evaluate a central visual pathway.|Facilitation with repetitive stimulation points toward Lambert-Eaton syndrome.',
'Needle EMG helps document widespread denervation and reinnervation, while also helping assess disorders that can mimic ALS.',
'ALS evaluation integrates clinical UMN signs with EMG evidence of LMN involvement.',
'Ask which test detects motor axon denervation of skeletal muscle.');
A(NO,1,'An infant with inflammation of the maxillary sinus has obstruction of the normal drainage passage into the nasal cavity. Where does the maxillary sinus usually drain?',
'Middle nasal meatus|Superior nasal meatus|Inferior nasal meatus|Sphenoethmoidal recess|Directly into nasopharynx',
0,'The maxillary sinus drains via the semilunar hiatus into the middle meatus.|Posterior ethmoidal air cells drain to the superior meatus.|Nasolacrimal duct opens into the inferior meatus.|Sphenoid sinus drains into the sphenoethmoidal recess.|Maxillary drainage is through the nasal cavity rather than direct nasopharyngeal opening.',
'The maxillary, frontal, and anterior/middle ethmoidal sinuses are associated with drainage into the middle nasal meatus.',
'Maxillary sinus → middle meatus; nasolacrimal duct → inferior meatus.',
'Contrast paranasal sinus drainage with tear drainage.');
A(NO,2,'After injury to the lingual nerve proximal to the joining of chorda tympani, a patient loses general sensation from the anterior two-thirds of the tongue but retains taste. Which nerve carried the disrupted somatic sensory fibers?',
'Mandibular trigeminal division (V3)|Facial nerve (VII) through chorda tympani|Glossopharyngeal nerve (IX)|Vagus nerve (X)|Hypoglossal nerve (XII)',
0,'The lingual nerve is V3 and transmits general sensation from the anterior tongue.|Chorda tympani carries taste and parasympathetic fibers rather than general somatic tongue sensation.|IX conveys sensation/taste primarily from the posterior third.|X supplies more posterior pharyngeal/epiglottic sensory regions.|XII is primarily tongue motor.',
'Taste and general sensation of the anterior two-thirds of the tongue travel via different cranial nerves even though fibers may run together peripherally.',
'Anterior tongue general sensation = V3; taste = VII.',
'Distinguish taste from touch/pain in the tongue.');
A(PL,2,'A patient develops hoarseness after thyroid surgery. Examination shows impaired adduction of one vocal fold, but cricothyroid action is preserved. Which nerve is most likely injured?',
'Recurrent laryngeal nerve|External branch of the superior laryngeal nerve|Internal branch of the superior laryngeal nerve|Glossopharyngeal nerve|Hypoglossal nerve',
0,'Recurrent laryngeal innervates nearly all intrinsic laryngeal muscles except cricothyroid.|External superior laryngeal supplies cricothyroid, which is functioning.|Internal superior laryngeal is largely sensory above the vocal folds.|IX is mainly involved in stylopharyngeus and pharyngeal sensory pathways.|XII supplies tongue muscles, not vocal fold adductors.',
'Most intrinsic muscles of the larynx receive recurrent laryngeal motor fibers; cricothyroid receives external superior laryngeal motor fibers.',
'Recurrent laryngeal injury → hoarseness/vocal fold paresis; external superior laryngeal injury → impaired high pitch.',
'Which laryngeal nerve supplies all intrinsic muscles except one?');
A(PL,3,'A 49-year-old with a brainstem lesion has impaired sensation when the right posterior pharyngeal wall is touched, but elevates the palate symmetrically when asked to say “ah.” Which component of the gag-reflex arc is most likely impaired?',
'Right CN IX afferent input|Right CN X efferent output|Left hypoglossal motor output|Right facial motor output|Bilateral phrenic motor output',
0,'CN IX conveys pharyngeal sensory input for the gag reflex.|Preserved palatal movement makes vagal motor loss less likely.|CN XII moves the tongue rather than mediating gag afferents.|CN VII controls facial expression, not the gag reflex.|Phrenic fibers supply the diaphragm, not pharyngeal sensation.',
'The gag reflex has a glossopharyngeal sensory limb and primarily vagal motor limb; separating input from output localizes the deficit.',
'Gag: CN IX in, CN X out.',
'The preserved response to a voluntary motor task helps separate afferent from efferent function.');
A(HY,2,'A 66-year-old has progressive bradykinesia, rigidity, and a resting tremor with reduced arm swing. Which microscopic loss underlies the classic hypokinetic motor syndrome?',
'Dopaminergic neurons of substantia nigra pars compacta|Striatal medium spiny GABA neurons of the indirect pathway|Subthalamic glutamatergic neurons|Cerebellar Purkinje cells|Vestibular hair cells',
0,'Nigrostriatal dopamine depletion produces the core Parkinson motor circuit dysfunction.|Early preferential indirect-pathway striatal loss is associated with Huntington chorea.|STN injury may cause contralateral ballistic movement.|Purkinje loss causes ataxia.|Vestibular hair-cell loss causes vertigo or imbalance.',
'Loss of SNc dopamine reduces GO pathway drive and increases NOGO influence, producing excessive inhibitory basal-ganglia output and bradykinesia.',
'Parkinson disease: SNc dopamine depletion and hypokinetic movement.',
'Which basal-ganglia transmitter normally promotes desired movement?');
A(HK,3,'A 43-year-old develops chorea and progressive behavioral changes; his father had a similar illness. MRI shows caudate atrophy. Which early circuit abnormality contributes to the excess involuntary movements?',
'Loss of striatal indirect-pathway GABAergic neurons reduces inhibition of thalamic motor circuits|Loss of dopaminergic substantia nigra neurons suppresses thalamus|Increased subthalamic stimulation of GPi suppresses thalamus|Increased activity of cerebellar Purkinje cells directly stimulates cortex|Destruction of corticospinal pyramidal axons releases motor cortex from inhibition',
0,'Early Huntington pathology disproportionately reduces indirect-pathway striatal inhibition of GPe, lowering STN/GPi restraint on thalamus.|SNc dopamine loss is characteristic of Parkinson hypokinesia.|More STN drive tends to increase GPi inhibition and reduce movement.|Purkinje cells are inhibitory and do not directly excite cerebral cortex.|Corticospinal injury causes weakness, not a classic hereditary chorea syndrome.',
'Indirect-pathway degeneration reduces the normal braking of unwanted movement. Huntington disease is caused by CAG expansion in HTT with anticipation often stronger through paternal transmission.',
'Huntington = chorea + psychiatric/cognitive changes + caudate atrophy + HTT repeat expansion.',
'Which pathway normally suppresses unwanted movement?');
A(HK,2,'A patient with long-term dopamine receptor blocker exposure develops repetitive lip smacking and choreiform tongue movements. Which diagnosis most directly matches this delayed syndrome?',
'Tardive dyskinesia|Essential tremor|Myasthenia gravis|Orthostatic myoclonus|Cerebellar intention tremor',
0,'Tardive dyskinesia commonly causes delayed orobuccolingual involuntary movements after chronic dopamine blockade.|Essential tremor is primarily rhythmic action/postural oscillation.|MG causes fatigable weakness rather than stereotyped movements.|Orthostatic myoclonus is predominantly leg jerking during stance.|Cerebellar intention tremor increases toward a target, not repetitive lip smacking.',
'Delayed hyperkinetic oral/facial movements following dopamine antagonist therapy indicate tardive dyskinesia rather than simple drug-induced Parkinsonism.',
'Tardive dyskinesia: delayed orobuccolingual hyperkinesia with dopamine receptor blockers.',
'Think of delayed rather than acute effects of dopamine blockade.');
A(TR,1,'A patient has a slowly progressive bilateral hand tremor while holding a cup and writing. There is no bradykinesia or rigidity. Which tremor classification best matches the examination?',
'Action/postural tremor characteristic of essential tremor|Rest tremor of Parkinson disease|Asterixis|Intention tremor from cerebellar injury|Functional weakness without tremor',
0,'Essential tremor is commonly bilateral and present during posture or action.|Parkinson tremor is often prominent at rest and accompanied by bradykinesia.|Asterixis is a negative myoclonus rather than rhythmic essential tremor.|Cerebellar intention tremor progressively worsens as a movement approaches a target.|The case describes visible rhythmic oscillation, not weakness alone.',
'Essential tremor typically becomes evident during posture or action and should be distinguished from Parkinson rest tremor and cerebellar intention tremor.',
'Essential tremor: predominantly action/postural, often bilateral.',
'Classification depends on when the movement occurs: rest, posture, or targeted action.');
A(TR,2,'A patient overshoots during finger-to-nose testing, with increasing tremor amplitude as the fingertip approaches the examiner’s finger. Which accompanying finding would best support a cerebellar rather than essential tremor?',
'Dysdiadochokinesia and gaze-evoked nystagmus|Preserved rapid alternating movements and normal gait|Prominent rigidity with reduced arm swing|Increased reflexes and extensor plantar response alone|Fatigable ptosis after sustained upgaze',
0,'Cerebellar dysfunction commonly produces dysdiadochokinesia, dysmetria, and gaze-evoked nystagmus.|Normal coordination favors isolated essential tremor more than major cerebellar injury.|Rigidity and reduced arm swing suggest Parkinsonism.|Pyramidal signs point to UMN pathology rather than specifically cerebellar dysfunction.|Fatigable ptosis suggests an NMJ disorder.',
'Intention tremor worsens near a movement target and often coexists with other cerebellar coordination deficits.',
'Cerebellar intention tremor + dysmetria + dysdiadochokinesia.',
'Look for signs that show failure to coordinate movement rather than rhythmic oscillation alone.');
A(TX,2,'A patient with Parkinson disease is started on oral levodopa. Which co-administered drug most directly increases levodopa delivery to the CNS while reducing peripheral dopamine-related adverse effects?',
'Carbidopa|Haloperidol|Metoclopramide|Tetrabenazine|Propranolol',
0,'Carbidopa inhibits peripheral aromatic L-amino acid decarboxylase but does not significantly cross the BBB.|Haloperidol blocks central dopamine D2 receptors and can worsen Parkinsonism.|Metoclopramide can block dopamine receptors and worsen extrapyramidal symptoms.|Tetrabenazine depletes monoamines and is used for chorea/tardive syndromes.|Propranolol can treat essential tremor but does not improve levodopa delivery.',
'Peripheral decarboxylase inhibition means less levodopa is converted to dopamine outside the brain, improving CNS availability and decreasing nausea/hypotension.',
'Levodopa crosses BBB; carbidopa protects it from peripheral conversion.',
'Identify where the drug should act relative to the blood-brain barrier.');
})();
