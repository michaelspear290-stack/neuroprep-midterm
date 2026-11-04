/* NeuroPrep content refinement: browser-side, deterministic, no network calls.
   Original 644 questions and anatomy figures remain in the single-page site.
   These transformations maintain question IDs/blueprintSlots/answers. */
(() => {
  'use strict';
  const questions=window.QUESTION_BANK||[];
  const letters='ABCDE';
  const key=s=>String(s||'').toLowerCase().replace(/[^a-z0-9α-ω]+/g,' ').trim();
  const vignettes={
    'Action Potentials':'During an electrophysiology experiment on a peripheral axon, investigators manipulate ionic conductance and assess the resulting membrane-voltage trace.',
    'Aging and Neurodegenerative Disorders':'A 68-year-old patient is referred to a neurology clinic because of progressive changes in cognition, movement, or behavior. The team considers competing neurodegenerative and potentially reversible explanations.',
    'Antiepileptics':'A patient with recurrent seizures is seen in a neurology clinic. The team is selecting and monitoring an antiseizure medication, with particular attention to its molecular target and adverse-effect profile.',
    'Autonomics':'A patient undergoes targeted autonomic testing following an unexplained change in involuntary organ function. The clinician must localize the responsible pathway and predict its physiological effects.',
    'Axon Repair':'Several weeks after a traumatic nerve injury, a patient has persistent weakness and numbness. The team discusses the cellular response to injury and whether meaningful reinnervation is possible.',
    'Cauda Equina and Conus Medullaris':'A patient presents to the emergency department with new lower-extremity and perineal neurologic symptoms. The examination is directed at distinguishing terminal-cord injury from lumbosacral root compression.',
    'Corticospinal and UMN/LMN':'After an abrupt focal neurologic event, a patient develops asymmetric weakness. The neurologic examination is repeated after spinal-shock effects, if present, have resolved.',
    'Cranial Nerve Reflexes':'During a focused brainstem examination, the clinician compares direct and consensual responses to stimulation and uses preserved motor output to distinguish afferent from efferent dysfunction.',
    'Cranial Nerves Module':'A patient has an isolated focal cranial neuropathy after a skull-base lesion. The examiner compares extraocular, facial, tongue, and swallowing deficits to identify the injured pathway.',
    'Embryological Disorders of CNS/PNS':'Prenatal imaging demonstrates a congenital nervous-system abnormality. A pediatric neurologist correlates the malformation with its developmental mechanism.',
    'Embryology of CNS/PNS':'During embryonic development, a disturbance selectively affects nervous-system patterning while some neighboring structures remain preserved. The team considers the affected cell population and signaling pathway.',
    'Face Anatomy':'After a facial injury or operation, a patient has a focal deficit in facial motor function, sensation, or gland secretion. The clinician uses the region and spared functions for anatomic localization.',
    'Facial Embryology':'A newborn is referred for assessment of a congenital craniofacial anomaly. The team reconstructs the relevant embryologic fusion events and pharyngeal-arch derivatives.',
    'Headaches':'A patient presents with a new or recurrent headache. The clinician evaluates onset, associated neurologic features, danger signs, and the timing of therapy.',
    'Histology Lab':'On a neural tissue slide, a resident identifies the relevant layers, cell populations, or connective-tissue boundaries and predicts the consequences of selective injury.',
    'Histology of CNS 1':'A neurobiology team examines neural cells under microscopy after selectively disrupting a cytoskeletal, axonal, or glial function.',
    'Histology of CNS 2':'Microscopic sections of central and peripheral nervous tissue are compared. The pathologist must identify the tissue architecture and associated functional specialization.',
    'Imaging Techniques':'A patient with a focal neurologic deficit undergoes brain imaging. The radiologist must select or interpret the sequence that best demonstrates the suspected pathology.',
    'Increased Intracranial Pressure':'A patient with progressive headache and visual symptoms is evaluated for disturbed intracranial pressure. The team compares causes, mechanisms, and appropriate treatments.',
    'Limbic System':'A patient develops altered emotional salience, motivation, or autonomic reactions after focal forebrain injury. The team uses limbic circuitry to explain the deficit.',
    'Memory Formation':'A patient has a new memory deficit after bilateral medial temporal dysfunction. The team compares explicit memory, procedural learning, and the synaptic mechanisms underlying plasticity.',
    'Multiple Sclerosis':'A young adult develops episodes of focal neurologic dysfunction separated in time. The clinician interprets the distribution and pathological mechanism of demyelinating lesions.',
    'Neck Anatomy':'Following surgery in the neck, a patient develops selective changes in voice, swallowing, shoulder strength, or autonomic function. The surgeon reviews the surrounding nerves and viscera.',
    'Neuropathology Lab':'A neuropathologist examines brain sections from a patient with a progressive neurologic disorder and correlates cellular findings with the bedside presentation.',
    'Neuropathology of Neurodegenerative Diseases Lecture':'In a neuropathology conference, a brain specimen is compared with a clinical history of progressive motor or cognitive deterioration.',
    'Pain and Pain Pathways':'Following a focal nervous-system injury, a patient reports altered pain perception. Examination distinguishes changes in sensation from emotional responses to pain.',
    'Pain Medications':'A patient with persistent pain is started on an analgesic. The clinician considers whether the treatment changes peripheral inflammatory signaling, synaptic transmission, or descending modulation.',
    'Peripheral Neuropathies':'A patient reports progressive distal numbness or weakness. The team integrates the distribution, reflexes, nerve-conduction findings, and systemic history to distinguish neuropathy mechanisms.',
    'Protecting the Brain':'After head trauma or raised intracranial pressure, a patient develops a focal deficit. The team considers the cranial layers, blood vessels, CSF pathways, and resulting compression.',
    'Radiculopathy':'A patient develops unilateral radiating pain and segmental weakness. The neurologist checks tendon reflexes and muscles supplied by several peripheral nerves to localize the affected root.',
    'Seizures and Epilepsy':'A patient experiences a paroxysmal neurologic episode. The team reviews the event sequence, awareness, EEG findings, and possible pharmacological interventions.',
    'Somatosensory Receptors and Tracts':'A patient loses a particular sensory modality after a focal lesion. The examiner compares light touch, vibration, position sense, pain, and temperature to trace the relevant ascending pathway.',
    'Spinal Cord':'After an acute spinal event, a patient has motor, sensory, and autonomic deficits. The clinician relates the pattern to spinal cord anatomy and vascular supply.',
    'Spinal Cord Cross-Sectional Anatomy':'A transverse spinal cord section shows a characteristic ratio of gray to white matter and identifiable dorsal-column and autonomic regions.',
    'Spinal Syndromes':'After a spinal injury, a patient shows dissociated sensory findings and a characteristic pattern of weakness. The team localizes the tract combinations involved.',
    'Synaptic Transmission and Neurotransmitters':'At a neural synapse, an experimental agent alters transmission despite preservation of some neuronal functions. Investigators analyze presynaptic release, postsynaptic responses, and transmitter metabolism.'
  };
  const focusedQuestion={
    'Action Potentials':'Which predicted change in excitability or action-potential kinetics best follows?',
    'Aging and Neurodegenerative Disorders':'Which clinical, genetic, or pathologic observation best supports the proposed explanation?',
    'Antiepileptics':'Which mechanism or treatment-associated finding is most consistent with the medication under consideration?',
    'Autonomics':'Which additional finding most strongly supports the proposed autonomic mechanism?',
    'Axon Repair':'Which cellular change best accounts for the expected recovery pattern?',
    'Cauda Equina and Conus Medullaris':'Which finding most strongly supports the suspected localization or management decision?',
    'Headaches':'Which associated observation or clinical intervention is most appropriate?',
    'Pain and Pain Pathways':'Which deficit or mechanism would be expected from this lesion?',
    'Memory Formation':'Which physiological or anatomic observation best accounts for the deficit?',
    'Seizures and Epilepsy':'Which finding best supports the suspected seizure type or underlying mechanism?',
    'Somatosensory Receptors and Tracts':'Which sensory deficit or receptor property would confirm this localization?',
    'Spinal Syndromes':'Which additional finding would best localize the injury?',
    'Antiepileptics':'Which mechanism or finding would be expected?',
  };
  const optionKnowledge={
    'mandibular division of cn v':'CN V3 supplies the muscles of mastication and general sensation over the mandibular region; it does not supply mimetic muscles.',
    'buccal branches of cn vii':'Buccal branches of CN VII are motor to facial-expression muscles, including buccinator.',
    'buccal sensory nerve of cn v3':'The long buccal nerve is sensory to the cheek mucosa and adjacent skin, not motor to buccinator.',
    'auriculotemporal nerve':'This V3 branch carries sensory fibers and postganglionic secretomotor fibers from the otic ganglion to the parotid.',
    'glossopharyngeal nerve':'CN IX supplies the preganglionic parotid secretomotor pathway; it is not itself the distal carrier of postganglionic fibers.',
    'greater petrosal nerve':'Greater petrosal carries CN VII parasympathetic fibers toward the pterygopalatine ganglion, mainly for lacrimation and nasal/palatal glands.',
    'chorda tympani':'Chorda tympani carries CN VII taste from the anterior tongue and preganglionic secretomotor fibers to submandibular/sublingual glands.',
    'right recurrent laryngeal nerve':'The recurrent laryngeal branch of CN X supplies all intrinsic laryngeal muscles except cricothyroid, including the sole vocal-fold abductor.',
    'right external branch of superior laryngeal nerve':'The external superior laryngeal branch supplies cricothyroid and affects pitch control rather than primary vocal-fold abduction.',
    'right internal branch of superior laryngeal nerve':'The internal superior laryngeal branch carries sensation above the vocal folds, not the motor supply to posterior cricoarytenoid.',
    'middle meningeal artery':'An arterial epidural bleed classically forms a lenticular collection limited by sutures.',
    'bridging veins':'Rupture of bridging veins typically causes a crescentic subdural hemorrhage rather than a biconvex epidural hemorrhage.',
    'flair':'FLAIR nulls CSF signal while retaining T2 sensitivity to adjacent brain lesions.',
    'noncontrast head ct':'Noncontrast head CT is the initial rapid test for acute intracranial hemorrhage.',
    'schaffer collaterals':'Schaffer collaterals connect hippocampal CA3 pyramidal neurons to CA1.',
    'mossy fibers':'Mossy fibers connect dentate granule cells to CA3, not CA3 to CA1.',
    'perforant pathway':'The perforant path supplies major entorhinal cortical input to dentate gyrus and hippocampal circuits.',
    '3-hz spike and wave':'Generalized 3-Hz spike-and-wave activity is characteristic of typical absence seizures.'
  };
  const knowledge=new Map(Object.entries(optionKnowledge));
  function parseRich(q) {
    const raw=String(q.explanation||'');
    if(!raw.startsWith('Key takeaway:'))return false;
    const marker=raw.indexOf(' A (');
    q.keyTakeaway=marker>=0?raw.slice('Key takeaway:'.length,marker).trim():raw.replace(/^Key takeaway:/,'').trim();
    const tail=marker>=0?raw.slice(marker):'';
    const out={};
    const re=/\s([A-E]) \(([\s\S]*?)\): (This fits:|Not the best answer:) ([\s\S]*?)(?=\s[A-E] \(|$)/g;
    let m;
    while((m=re.exec(tail))!==null){out[m[1]]=m[4].trim();}
    if(Object.keys(out).length===5){
      q.optionRationales=out;
      q.explanation=(out[q.answer]||q.keyTakeaway).replace(/\.$/,'')+'. '+q.keyTakeaway.replace(/\.$/,'')+'.';
      for(let i=0;i<q.options.length;i++){
        const k=key(q.options[i]);
        if(!knowledge.has(k) && out[letters[i]])knowledge.set(k,out[letters[i]]);
      }
      return true;
    }
    return false;
  }
  for(const q of questions)parseRich(q);
  const notes={
    1:{A:'V3 motor dysfunction would weaken chewing; normal masseter strength argues against it.',C:'The buccal nerve of V3 is sensory; preserved sensation and loss of facial expression point to CN VII.',D:'The auriculotemporal nerve supplies cutaneous sensation and conveys parotid secretomotor fibers, not smile or cheek compression.',E:'CN IX participates in parotid secretion and posterior tongue/pharyngeal function, not facial expression.'},
    2:{A:'Greater petrosal fibers are associated with the pterygopalatine ganglion and lacrimal/nasal secretion.',B:'Chorda tympani supplies the submandibular ganglion and anterior tongue taste, not the parotid.',D:'The buccal facial branches control mimetic muscles, not postganglionic parotid secretion.',E:'Lesser occipital is a sensory cervical plexus branch without parotid secretomotor function.'},
    3:{A:'Medial pterygoid is supplied by V3 rather than CN VII, and its principal function is jaw elevation.',B:'Masseter is innervated by V3, not V2, and mainly elevates the jaw.',D:'Temporalis is innervated by V3, not CN VII; a unilateral temporalis lesion does not explain the deviation on protrusion.',E:'Buccinator is a facial-expression muscle supplied by CN VII, not the prime mover of jaw protrusion.'},
    9:{A:'External superior laryngeal nerve injury predominantly impairs cricothyroid and high-pitch phonation, rather than posterior cricoarytenoid function.',C:'Hypoglossal injury affects tongue movement, not intrinsic laryngeal muscle function.',D:'Glossopharyngeal injury may impair the pharyngeal sensory limb of the gag reflex and stylopharyngeus, not vocal-fold abduction.',E:'Internal superior laryngeal injury predominantly causes supraglottic sensory loss.'},
    13:{A:'CN VI dysfunction causes abduction weakness but does not explain mydriasis with ptosis and a down-and-out eye.',B:'Corneal sensation is primarily CN V1 and is not the key differentiator for CN III compression.',D:'Facial paralysis localizes to CN VII.',E:'Afferent pupillary light failure localizes to CN II, whereas a third-nerve compressive lesion affects efferent constriction.'},
    25:{A:'T1 is useful for anatomy and postcontrast enhancement but is not the CSF-suppressed T2-sensitive sequence requested.',B:'Conventional T2 makes CSF bright and can obscure adjacent periventricular lesions.',D:'Susceptibility imaging excels at blood products and mineralization, not periventricular CSF suppression.',E:'Time-of-flight angiography depicts vascular flow rather than CSF-suppressed parenchymal lesions.'},
    28:{A:'Torn bridging veins produce a subdural rather than a suture-limited biconvex collection.',C:'Superior sagittal sinus rupture is less characteristic of a lateral temporal arterial epidural bleed.',D:'The middle cerebral artery is intradural; its rupture does not typically produce a classic traumatic epidural hematoma.',E:'Anterior communicating aneurysms classically cause subarachnoid hemorrhage.'},
    34:{A:'The corticospinal fibers have not yet crossed at this site; the resulting weakness is contralateral, not ipsilateral.',C:'This describes lower motor neuron injury, not damage to descending corticospinal fibers above their decussation.',D:'A unilateral pyramidal lesion would not cause symmetric bilateral peripheral motor dysfunction.',E:'The spinothalamic system carries pain and temperature; the lesion described selectively affects corticospinal motor fibers.'},
    36:{A:'An isolated left CN VII motor lesion would prevent a left blink even when the right cornea is stimulated.',B:'A right CN VII lesion would prevent right blinking regardless of which cornea is stimulated.',D:'Right V1 afferent damage would abolish bilateral blinking after right, not left, corneal stimulation.',E:'With bilateral CN VII lesions, direct and consensual eye closure would fail with stimulation of either cornea.'},
    43:{A:'A right posterior-column lesion would cause right-sided vibration/position loss; these columns are intact.',C:'The anterolateral tract has already crossed in the spinal cord; a right tract injury impairs left below-lesion pain and temperature.',D:'Facial sensation ascends through trigeminal rather than thoracic spinal cord pathways.',E:'Discriminative touch ascends through DCML, which is spared here.'},
    52:{A:'Before the medullary decussation the gracile pathway still represents the ipsilateral body.',C:'The gracile nucleus does not carry upper-limb pain/temperature.',D:'Facial discriminative touch is conveyed through the trigeminal pathways to VPM, not nucleus gracilis.',E:'A unilateral gracile lesion affects the ipsilateral lower body rather than bilateral whole-body sensation.'},
    53:{B:'VPL conveys contralateral body sensation; this lesion selectively involves VPM, which processes facial signals.',C:'Lower-extremity fine touch ascends to VPL, not VPM.',D:'Blink motor output is mediated by bilateral CN VII nuclei and nerves, not the thalamic VPM.',E:'Mastication strength depends on trigeminal motor pathways, not somatosensory thalamic relay cells.'},
    54:{A:'Posterior spinal artery territories include dorsal columns; those modalities are preserved here.',C:'The middle cerebral artery supplies a cerebral territory, not the anterior spinal cord.',D:'PICA supplies the dorsolateral medulla and inferior cerebellum, not this spinal distribution.',E:'AICA supplies portions of the lateral pons and cerebellum rather than the spinal anterior two-thirds.'},
    57:{A:'Anterior cord infarction commonly impairs motor and pain/temperature pathways with relatively spared position sense, not selectively worse arm weakness.',B:'Posterior cord syndrome primarily affects vibration and proprioception.',D:'Brown–Séquard produces a lateralized hemicord pattern rather than symmetric arm-predominant weakness.',E:'Cauda equina produces lumbosacral root lower motor neuron, saddle, and sphincter symptoms, not disproportionate arm deficits.'},
    68:{A:'The fornix conveys hippocampal mnemonic output, not light entrainment.',B:'Stria terminalis conveys amygdala-related affective/autonomic information, not the principal photic input.',D:'Mammillothalamic fibers participate in memory circuitry.',E:'The corticospinal tract carries descending motor signals and does not relay retinal circadian information.'},
    69:{A:'Stalk disruption reduces, rather than globally increases, the usual releasing factors and impairs posterior pituitary hormone transport.',B:'Loss of tonic hypothalamic dopamine typically increases prolactin, rather than decreasing it.',D:'LH and FSH generally fall when portal GnRH signaling is lost; prolactin commonly increases.',E:'Pituitary stalk injury may affect several anterior hormones and posterior ADH, not just prolactin.'},
    74:{A:'Perforant projections are predominantly from entorhinal cortex toward dentate gyrus and other hippocampal fields.',B:'Mossy fibers link the dentate gyrus to CA3, not CA3 to CA1.',D:'The mammillothalamic tract links mammillary bodies to anterior thalamus.',E:'Stria terminalis conveys limbic outputs from amygdala rather than intrahippocampal CA3-to-CA1 projections.'},
    75:{A:'Reduced postsynaptic NMDA calcium influx limits rather than enhances the usual calcium/kinase-dependent LTP induction.',C:'The intervention acts at postsynaptic NMDA channels, not the ability of presynaptic axons to fire.',D:'Voltage-gated potassium channel changes are not the direct pharmacologic effect specified.',E:'Motor-neuron acetylcholine release at the neuromuscular junction is a separate synaptic process.'},
    80:{A:'Absence seizures are usually sudden, very brief, lack a prolonged postictal state, and do not usually begin with a focal olfactory aura.',B:'The patient loses awareness during the event, so this is not a fully focal-aware seizure.',D:'Atonic seizures cause abrupt loss of tone and falls, unlike automatisms with behavioral arrest.',E:'Myoclonic seizures are shock-like, very brief motor jerks rather than sustained impaired awareness with automatisms.'},
    81:{A:'Temporal sharp waves suggest a focal seizure focus and do not fit the stereotyped absence pattern.',C:'Burst suppression is a severely abnormal EEG background, not the characteristic typical absence pattern.',D:'Status epilepticus entails sustained or recurring seizure activity without recovery, unlike isolated brief spells.',E:'Occipital slowing is nonspecific and lacks generalized epileptiform spike-and-wave morphology.'}
  };
  const objectiveFocus={"Action Potentials":"Predict how ion gradients, channel opening/inactivation, and membrane conductance affect resting potential, spike shape, and refractoriness.","Aging and Neurodegenerative Disorders":"Differentiate dementia etiologies using clinical patterns, genetics, neuroanatomy, and distinctive microscopic pathology.","Antiepileptics":"Match antiseizure medication mechanisms, drug examples, and important adverse effects to seizure management.","Autonomics":"Compare autonomic pathways, receptors, neurotransmitters, and injury patterns, including sympathetic and parasympathetic effects.","Axon Repair":"Contrast Wallerian degeneration and regeneration in the PNS versus CNS, including Schwann-cell support and inhibitory glial responses.","Cauda Equina and Conus Medullaris":"Differentiate cauda equina and conus medullaris deficits, localize affected structures, and recognize urgent evaluation needs.","Corticospinal and UMN/LMN":"Trace descending motor pathways, their decussations, and the examination patterns of upper versus lower motor neuron injury.","Cranial Nerve Reflexes":"Trace cranial reflex afferent and efferent limbs and use asymmetric reflex findings for lesion localization.","Cranial Nerves Module":"Identify cranial nerve courses, modalities, functions, foramina, and clinical lesion presentations.","Embryological Disorders of CNS/PNS":"Link neural tube and neural crest developmental abnormalities to characteristic congenital nervous-system disorders.","Embryology of CNS/PNS":"Explain neurulation and neural tube patterning, neural crest derivatives, and their consequences for nervous-system formation.","Face Anatomy":"Correlate facial muscle, trigeminal, facial and autonomic innervation, arterial/venous pathways, and parotid anatomy with injuries.","Facial Embryology":"Match pharyngeal arch, pouch, cleft, and facial prominence development to congenital craniofacial findings.","Headaches":"Distinguish primary headache syndromes, aura, headache red flags, urgent investigations, and mechanism-based acute therapies.","Histology Lab":"Recognize neuronal and glial cells, peripheral nerve coverings, and cerebellar/cerebral tissue in microscopy.","Histology of CNS 1":"Describe neuronal organelles and axonal transport and compare myelinating and support functions of CNS versus PNS glia.","Histology of CNS 2":"Identify organizational layers and cellular arrangements of peripheral and central nerve tissue.","Imaging Techniques":"Choose and interpret CT/MRI modalities and MRI sequences using contrast, CSF suppression, and lesion characteristics.","Increased Intracranial Pressure":"Recognize mechanisms, clinical manifestations, imaging, and treatments of elevated intracranial or CSF pressure.","Limbic System":"Relate amygdala, cingulate, hypothalamic, and related limbic circuits to affect, behavior, and autonomic responses.","Memory Formation":"Compare memory systems and hippocampal pathways; explain NMDA/AMPA signaling in long-term potentiation and depression.","Multiple Sclerosis":"Relate CNS inflammatory demyelination to MRI/clinical dissemination criteria and differentiate competing demyelinating conditions.","Neck Anatomy":"Localize structures and nerve lesions of the cervical compartments, larynx, pharynx, thyroid, and sympathetic chain.","Neuropathology Lab":"Correlate degenerative neurologic presentations with characteristic histopathology of the brain.","Neuropathology of Neurodegenerative Diseases Lecture":"Distinguish neurodegenerative pathological protein accumulations, affected regions, and inherited mechanisms.","Pain and Pain Pathways":"Trace anterolateral nociceptive pathways, fiber types, pain modulation, and central sensitization.","Pain Medications":"Compare mechanisms, common adverse effects, and clinical uses of opioid and nonopioid pain therapies.","Peripheral Neuropathies":"Differentiate demyelinating, axonal, inherited, inflammatory, and systemic neuropathies using clinical and study findings.","Protecting the Brain":"Trace meninges, vasculature, CSF, cranial foramina, and patterns of extra-axial bleeding or herniation.","Radiculopathy":"Localize nerve roots using myotomal weakness, reflex changes, dermatomal symptoms, and peripheral nerve comparisons.","Seizures and Epilepsy":"Classify seizures by onset and awareness and connect clinical features with EEG patterns and emergency presentations.","Somatosensory Receptors and Tracts":"Match mechanoreceptors and axon types to sensation and trace DCML/trigeminal touch pathways through crossings and relay nuclei.","Spinal Cord":"Integrate cord regions, spinal blood supply, motor and sensory pathways, and characteristic deficits after cord injury.","Spinal Cord Cross-Sectional Anatomy":"Identify spinal levels by white/gray matter arrangement, dorsal column divisions, and autonomic cell columns.","Spinal Syndromes":"Distinguish spinal cord syndromes and localize tract injuries using ipsilateral/contralateral sensory and motor patterns.","Synaptic Transmission and Neurotransmitters":"Predict synaptic vesicle release, neurotransmitter synthesis and termination, graded summation, and receptor-specific signaling.","Imaging Techniques for the Head and Brain":"Distinguish CT, MRI sequences, and neurologic imaging applications."};
  for(const q of questions){
    q.objectiveFocus=objectiveFocus[q.topic]||'Apply the relevant named lecture learning objective to clinical anatomy, physiology, or pathology.';
    if(q.topic==='Action Potentials')q.week=3;
    if(q.id===1 && q.objective)q.objective='LO 2, 6';
    if(!q.keyTakeaway){
      q.keyTakeaway=String(q.explanation||'').split(/(?<=[.!?])\s+/)[0]||'Connect the localization or mechanism to the decisive examination finding.';
    }
    if(!q.optionRationales)q.optionRationales={};
    const original=q.id<=100;
    for(let i=0;i<q.options.length;i++){
      const l=letters[i];
      if(q.optionRationales[l])continue;
      const defined=notes[q.id]?.[l]||knowledge.get(key(q.options[i]));
      if(defined){q.optionRationales[l]=defined;continue;}
      q.optionRationales[l]=l===q.answer?
         q.explanation:
         'This alternative does not account for the key discriminating findings together. Contrast its pathway, expected deficit, and location with the mechanism in the correct answer.';
    }
    if(original)q.isOriginalChallenge=true;
    if(q.stem.startsWith('A clinical team is distinguishing ')){
      const m=q.stem.match(/^A clinical team is distinguishing (.*?) from related diagnoses, structures, and mechanisms in (.*?)\. Which observation is most consistent with the named finding\?$/);
      if(m){
        const concept=m[1],context=vignettes[q.topic]||'A patient with a focal neurologic problem is discussed at a teaching conference. The team reviews mechanisms that could cause superficially similar findings.';
        const prompt=focusedQuestion[q.topic]||'Which finding most specifically supports this proposed mechanism or localization?';
        q.stem=context+' The leading hypothesis concerns '+concept+'. '+prompt;
      }
    }else{
      q.stem=q.stem.replace('Which localization, mechanism, or structure best explains the presentation?',
        focusedQuestion[q.topic]||'Which anatomic localization, mechanism, or expected clinical consequence best explains these findings?');
    }
    q.explanation=q.explanation.trim();
  }

  /* NeuroPrep v3.1 — targeted clinical cases, richer learning notes, stable
     answer-order migration and opt-in study games. Original 100 cases retained. */
  const caseSet=[
    {id:360,stem:"In a hippocampal slice preparation, repeated low-frequency stimulation produces an enduring reduction in excitatory postsynaptic current amplitude. The presynaptic fiber volley is unchanged. A calcineurin inhibitor prevents this adaptation, but inhibiting CaMKII does not. Which postsynaptic event most likely mediates the change?",
    options:["Increased insertion of GluA1-containing AMPA receptors","Enhanced presynaptic glutamate vesicle docking","Activation of PKA-dependent CREB transcription","Clathrin-dependent internalization of AMPA receptors","Increased NMDA receptor magnesium blockade at rest"],
    answer:"D",reason:"Low-frequency activation generates relatively modest postsynaptic calcium signals, favoring calcineurin and protein phosphatase 1. These dephosphorylate AMPA-receptor-associated targets and promote AMPA receptor endocytosis, reducing the response to subsequent glutamate release. This is a classical form of long-term depression (LTD), unlike CaMKII-dependent LTP.",
    why:["AMPA insertion increases synaptic strength and is a common expression mechanism for LTP.","The unchanged fiber volley and selective phosphatase dependence point toward a postsynaptic expression mechanism.","PKA/CREB signaling is more closely related to transcription-dependent consolidation of some forms of long-term plasticity.","AMPA receptor removal decreases postsynaptic responsiveness without requiring fewer action potentials in the presynaptic axon.","The voltage-dependent magnesium block controls NMDA channel opening, but increased resting block is not the specific phosphatase-mediated expression step."],
    takeaway:"LTD: modest NMDA-dependent Ca2+ entry → calcineurin/PP1 → AMPA receptor internalization. LTP: stronger Ca2+ entry → CaMKII → AMPA receptor insertion.",
    hint:"Compare the consequences of modest versus large postsynaptic calcium transients."},
    {id:352,stem:"Two populations of CA1 synapses receive distinct stimulation protocols. After a brief high-frequency train, population A has a larger field EPSP slope for hours. After low-frequency trains, population B has a smaller slope. Blocking postsynaptic NMDA receptors during induction prevents both changes. Which intracellular distinction best predicts their opposite long-term outcomes?",
    options:["Large calcium transients recruit CaMKII; smaller transients preferentially engage phosphatases","Large calcium transients suppress all kinases; smaller transients activate CaMKII","Both protocols require identical AMPA receptor removal","Both forms arise only through axonal sodium channel inactivation","Only the depressed synapses use postsynaptic glutamate receptors"],
    answer:"A",reason:"NMDA receptors allow postsynaptic calcium influx when glutamate binding coincides with sufficient depolarization. The amplitude and timing of that calcium signal bias downstream enzymes: strong, brief signals favor CaMKII-dependent potentiation and AMPA insertion, while smaller or sustained signals favor phosphatases and AMPA removal.",
    why:["Calcium-signal strength is a major determinant of whether kinase- or phosphatase-dominated plasticity occurs.","This reverses the established kinase/phosphatase relationship between LTP and LTD.","The potentiated population generally increases functional postsynaptic AMPA receptor expression rather than removing receptors.","Sodium channel inactivation influences spiking but does not explain the enduring bidirectional synaptic changes after induction.","Both forms involve glutamatergic postsynaptic receptors; they differ in the downstream signaling balance."],
    takeaway:"For NMDA-dependent plasticity, think calcium signal → enzymes → AMPA trafficking → synaptic strength.",
    hint:"Both populations need NMDA receptor activation; the difference occurs downstream of calcium entry."},
    {id:101,stem:"A 55-year-old with renal failure has a serum potassium of 7.4 mEq/L. Early in the process, skeletal muscle fibers are closer to threshold, but after sustained severe hyperkalemia the patient develops flaccid weakness. Which sequence most accurately explains this apparent paradox?",
    options:["Increased outward potassium driving force followed by chloride channel closure","Depolarization of resting membrane potential followed by voltage-gated sodium-channel inactivation","Initial hyperpolarization followed by enhanced sodium-channel availability","Reduced potassium conductance followed by increased acetylcholine release","Increased myelin capacitance followed by saltatory-conduction failure"],
    answer:"B",reason:"Elevated extracellular potassium makes the potassium equilibrium potential less negative, depolarizing the resting membrane. Mild depolarization can initially increase excitability. Sustained depolarization leaves a larger fraction of voltage-gated sodium channels in their inactivated state, preventing normal regenerative upstrokes and causing weakness.",
    why:["Raising extracellular potassium decreases the chemical gradient driving K+ outward; it does not initially increase that driving force.","This mechanism explains both the early increased excitability and later failure of action potential generation.","High extracellular potassium depolarizes, rather than hyperpolarizes, the resting membrane.","Acetylcholine release is not the primary mechanism of hyperkalemic paralysis.","Myelin capacitance is unrelated to the time-dependent sodium-channel inactivation caused by hyperkalemia."],
    takeaway:"Severe sustained depolarization may decrease excitability by inactivating fast voltage-gated sodium channels.",
    hint:"Distinguish the resting membrane potential from the availability of fast sodium channels."},
    {id:106,stem:"In a nerve-conduction experiment, a second electrical stimulus is delivered 4 ms after a propagated action potential. A stronger-than-usual stimulus elicits a second spike, but the original stimulus intensity fails. A stimulus delivered immediately after the first spike fails even when intensity is markedly increased. What explains the later interval?",
    options:["Permanent loss of sodium channels after the first action potential","Complete sodium-channel inactivation regardless of membrane voltage","Persistent increased potassium conductance with incomplete recovery of sodium-channel availability","Loss of voltage-gated calcium current at the axon terminal","Failure of the sodium-potassium ATPase during the first millisecond"],
    answer:"C",reason:"During the relative refractory period some sodium channels have recovered, so a sufficiently large stimulus can trigger another spike. Residual potassium conductance and afterhyperpolarization raise the effective threshold. During the preceding absolute refractory period, insufficient sodium channels are available for a regenerative upstroke.",
    why:["Sodium channels recover from inactivation on a millisecond time scale; they are not destroyed by firing.","That describes the absolute refractory period, when another action potential cannot be elicited.","Residual K+ efflux and incomplete Na+ recovery explain the temporarily higher stimulus requirement.","Terminal calcium channels control transmitter release rather than the threshold for propagating a second axonal spike.","The refractory periods arise primarily from channel gating, not acute failure of the ATPase."],
    takeaway:"Absolute refractory: no second spike at any stimulus strength. Relative refractory: stronger stimulus can overcome elevated threshold.",
    hint:"Which state allows some sodium channels to be available again?"},
    {id:117,stem:"A 74-year-old has progressive cognitive impairment. His wife describes periods of normal conversation alternating with marked inattention, recurrent well-formed visual hallucinations, and violent movements while asleep. Neurologic examination reveals rigidity and bradykinesia. Which brain protein pathology best unifies this syndrome?",
    options:["Extracellular Aβ plaques with tau tangles","Prion protein accumulation with spongiform change","TDP-43 aggregates restricted to frontal cortex","Alpha-synuclein-containing Lewy bodies","Expanded polyglutamine huntingtin inclusions"],
    answer:"D",reason:"The combination of fluctuating cognition, recurrent visual hallucinations, REM sleep behavior disorder, and spontaneous parkinsonism strongly suggests dementia with Lewy bodies. It is an alpha-synucleinopathy with widespread Lewy-related pathology; Alzheimer pathology can coexist but is not the defining association.",
    why:["Alzheimer pathology generally begins with progressive episodic memory impairment rather than this characteristic fluctuating-hallucinatory phenotype.","Prion disease usually produces a much more rapidly progressive dementia, often with myoclonus.","Frontotemporal TDP-43 disease more often presents with personality, behavior, or language changes.","Alpha-synuclein aggregates are the characteristic substrate of Lewy body disease and Parkinson disease.","Huntington disease classically causes progressive chorea, executive/psychiatric changes, and caudate degeneration."],
    takeaway:"Lewy body dementia clues: fluctuating attention, vivid visual hallucinations, REM sleep behavior disorder and spontaneous parkinsonism.",
    hint:"Which protein links a cognitive syndrome with parkinsonism and REM sleep behavior disorder?"},
    {id:132,stem:"A patient with focal epilepsy develops gingival overgrowth, coarse facial features, and gait ataxia several months after starting antiseizure therapy. The medication decreases the ability of neurons to fire repetitive high-frequency action potentials. Which molecular effect is most likely?",
    options:["Use-dependent stabilization of inactivated voltage-gated sodium channels","Blockade of thalamic T-type calcium channels","Binding to synaptic vesicle protein SV2A","Irreversible inhibition of GABA transaminase","Competitive antagonism of NMDA glutamate receptors"],
    answer:"A",reason:"Phenytoin prolongs the inactivated state of voltage-gated Na+ channels and preferentially limits high-frequency firing. Chronic adverse effects can include gingival hyperplasia, hirsutism/coarsened features, neuropathy and cerebellar dysfunction. Contrast its adverse-effect profile with carbamazepine and lamotrigine, which also target sodium channels.",
    why:["Phenytoin's use-dependent sodium-channel effect and gingival hyperplasia support this choice.","Ethosuximide primarily inhibits thalamic T-type calcium currents in typical absence epilepsy.","Levetiracetam acts through SV2A rather than producing the classic phenytoin phenotype.","Vigabatrin inhibits GABA transaminase and is notable for visual-field toxicity.","NMDA antagonism is not the canonical antiseizure mechanism in this presentation."],
    takeaway:"Associate phenytoin with sodium-channel inactivation, gingival hyperplasia, hirsutism, ataxia and teratogenic risk.",
    hint:"Use both the drug's neurologic action and its characteristic chronic oral adverse effect."},
    {id:134,stem:"An otherwise healthy 8-year-old has 10-second episodes of staring that interrupt speech, occur many times daily, and end without confusion. Hyperventilation provokes generalized 3-Hz spike-and-wave discharges. Which drug mechanism best addresses the circuit responsible for these attacks?",
    options:["Prolonging inactivated sodium-channel states in cortical neurons","Blocking T-type calcium currents in thalamic relay neurons","Irreversibly inhibiting GABA transaminase","Inhibiting synaptic-vesicle protein SV2A","Reducing glutamate release by binding alpha2delta calcium-channel subunits"],
    answer:"B",reason:"Typical absence seizures arise from abnormal thalamocortical oscillations involving low-threshold T-type Ca2+ currents. Ethosuximide inhibits these currents and is a standard first-line choice for isolated typical absence seizures; a short duration, immediate recovery, and generalized 3-Hz EEG pattern distinguish them from focal impaired-awareness seizures.",
    why:["Sodium-channel inhibitors are often useful for focal seizures but do not selectively target the thalamic absence mechanism.","Ethosuximide's T-type calcium-current inhibition targets the relevant thalamocortical rhythm.","Vigabatrin inhibits GABA breakdown and is not standard first-line therapy for typical absence seizures.","Levetiracetam modulates transmitter release through SV2A, not the classic absence-specific mechanism.","Gabapentinoids act at alpha2delta subunits and are not the canonical treatment for this syndrome."],
    takeaway:"Typical absence: brief behavioral arrest, immediate recovery, 3-Hz spike-wave EEG, and T-type Ca2+ current blockade.",
    hint:"Identify the rhythm-generating thalamic ion current involved in absence epilepsy."},
    {id:144,stem:"A woman treated with an antimuscarinic medication for overactive bladder develops heat intolerance, dry skin and decreased sweating. Her postganglionic sympathetic fibers are anatomically intact. Which autonomic transmitter-receptor pairing explains the change in sweat production?",
    options:["Norepinephrine activating alpha1 receptors at sweat glands","Acetylcholine activating nicotinic receptors directly at eccrine glands","Epinephrine activating beta2 receptors at eccrine glands","Acetylcholine activating muscarinic receptors at eccrine glands","Nitric oxide activating guanylate cyclase at eccrine glands"],
    answer:"D",reason:"Most sympathetic postganglionic neurons release norepinephrine, but eccrine sweat glands are a key exception: sympathetic postganglionic fibers release acetylcholine onto muscarinic receptors. Thus an antimuscarinic can suppress sweating despite an intact sympathetic trunk and ganglia.",
    why:["Alpha1 receptors primarily mediate vascular smooth-muscle contraction, not the usual eccrine secretomotor signal.","Nicotinic receptors mediate fast transmission within autonomic ganglia, not the final eccrine effector receptor.","Circulating catecholamines are not the main postganglionic transmitter to eccrine sweat glands.","Sympathetic cholinergic muscarinic transmission drives normal thermoregulatory sweating.","Nitric oxide is important in vascular signaling but not the principal eccrine secretomotor synapse."],
    takeaway:"All autonomic preganglionic neurons use ACh/nicotinic receptors; eccrine sweat glands are a sympathetic postganglionic ACh/muscarinic exception.",
    hint:"Separate the sympathetic ganglionic synapse from the final neuroeffector junction."},
    {id:169,stem:"A 68-year-old suddenly develops equal weakness of the left face, arm, and leg, hyperreflexia, and an extensor plantar response. There is no aphasia, neglect, visual-field cut, or cortical sensory deficit. MRI shows a 7-mm infarct of the right posterior limb of the internal capsule. Which fiber arrangement best explains this dense deficit?",
    options:["Selective damage to the right dorsal-column nucleus","Interruption of tightly packed descending corticospinal fibers above the pyramidal decussation","Loss of left anterior-horn motor neuron cell bodies at multiple segments","Interruption of the right spinothalamic tract below its spinal crossing","Isolated injury to the right facial nerve at the stylomastoid foramen"],
    answer:"B",reason:"The posterior limb of the internal capsule concentrates descending motor fibers into a compact location. A small contralateral lesion above the medullary pyramidal decussation can cause a pure motor hemiparesis of the opposite body without cortical signs. UMN findings become evident after the acute phase.",
    why:["The dorsal-column nucleus carries somatosensory input and would not cause isolated dense pure motor hemiparesis.","Concentrated motor fibers above their crossing explain disproportionate weakness from a small capsular lesion.","Multiple spinal anterior-horn lesions would produce segmental ipsilateral lower motor neuron signs.","A spinothalamic lesion would primarily alter pain and temperature, not facial and limb motor function.","A peripheral facial nerve injury would spare arm and leg strength and cause an ipsilateral LMN facial pattern."],
    takeaway:"Pure motor hemiparesis without cortical signs strongly suggests a lacunar internal-capsule or pontine motor pathway lesion.",
    hint:"Consider how densely descending fibers are packed before reaching the medulla."},
    {id:255,stem:"A 36-year-old awakens each night with abrupt, excruciating pain behind his right eye. Each episode lasts about 40 minutes, and he paces rather than lying still. His right eye becomes red and watery and the nostril congested. Between episodes he is asymptomatic. What is the most appropriate rapid abortive treatment?",
    options:["Daily oral propranolol","High-flow 100% oxygen via nonrebreather mask","Low-dose oral amitriptyline","Oral acetaminophen alone","Long-term carbamazepine"],
    answer:"B",reason:"The short, excruciating, strictly unilateral orbital attacks with ipsilateral cranial autonomic findings and restlessness are classic for cluster headache. High-flow oxygen is an effective acute therapy; subcutaneous or intranasal sumatriptan is another option. Verapamil is commonly used for prevention rather than immediate abortion.",
    why:["Propranolol is a preventive for migraine, not the rapid treatment of an ongoing cluster attack.","Rapid high-concentration oxygen is a standard acute cluster-headache intervention.","Amitriptyline is used preventively in some chronic headache syndromes; it does not rapidly abort cluster attacks.","Simple oral analgesics often act too slowly and are insufficient for severe brief cluster episodes.","Carbamazepine is a key medication for trigeminal neuralgia, a different pattern of facial pain."],
    takeaway:"Cluster: orbital pain 15–180 minutes + autonomic signs + agitation. Abort with oxygen or fast-acting triptan; prevent with verapamil.",
    hint:"Separate acute cluster therapy from migraine prevention and trigeminal-neuralgia treatment."},
    {id:368,stem:"A 28-year-old with two previous episodes of transient neurologic dysfunction develops binocular horizontal diplopia. During attempted right gaze, the left eye fails to adduct, while the right eye abducts with nystagmus. Convergence is preserved. Which structure is most likely affected?",
    options:["Left medial longitudinal fasciculus","Right abducens nerve","Left oculomotor nerve","Right paramedian pontine reticular formation","Left optic nerve"],
    answer:"A",reason:"An internuclear ophthalmoplegia occurs when a medial longitudinal fasciculus lesion interrupts communication from the contralateral abducens interneurons to the ipsilateral medial rectus subnucleus. With impaired left-eye adduction on right gaze and spared convergence, the left MLF is implicated. In a young adult, multiple sclerosis is an important cause.",
    why:["The left MLF connects the right abducens horizontal-gaze circuit to left medial rectus activation.","A right CN VI lesion would impair right-eye abduction rather than selectively left-eye adduction.","A left CN III lesion would often impair convergence, ptosis or additional extraocular movements.","A right PPRF lesion would impair conjugate right gaze in both eyes, not isolated left adduction.","Optic nerve damage causes visual afferent dysfunction rather than internuclear ocular motility deficits."],
    takeaway:"INO side = eye that cannot adduct on horizontal gaze. Convergence may be preserved because the medial rectus pathway remains functional.",
    hint:"Which tract coordinates the two eyes during horizontal conjugate gaze?"},
    {id:424,stem:"A 48-year-old has persistent burning discomfort months after a shingles eruption. A light cotton swab across previously affected skin produces severe pain, although it would not normally activate nociceptors sufficiently to hurt. Repetitive input has increased dorsal-horn excitability. What is the best description of the sensory phenomenon?",
    options:["Hyperalgesia from a normally painful pinprick","Allodynia associated with central sensitization","Anesthesia dolorosa from total loss of sensation","Normal temporal summation without any neural plasticity","Pain referred from an unaffected visceral organ"],
    answer:"B",reason:"Allodynia means pain evoked by a stimulus that is normally nonpainful. Central sensitization can develop after sustained nociceptive activity, involving amplified dorsal-horn responsiveness, NMDA-dependent changes and recruitment of ordinarily innocuous afferent input into pain processing.",
    why:["Hyperalgesia is increased pain from a stimulus that is normally painful, unlike the cotton swab here.","The nonpainful stimulus becomes painful in the setting of heightened central nociceptive gain.","Anesthesia dolorosa describes pain in a numb region after deafferentation and is not the primary described mechanism.","Persistence after tissue healing and altered response to a benign stimulus suggest plasticity beyond ordinary summation.","Referred pain follows convergence of visceral and somatic inputs, not this dermatomal cutaneous allodynia."],
    takeaway:"Allodynia = pain from a normally harmless stimulus; hyperalgesia = exaggerated pain from a normally painful stimulus.",
    hint:"Classify the stimulus by whether it is normally painful."},
    {id:438,stem:"A 61-year-old with painful distal neuropathy is given a drug initially developed as an antiseizure medication. It decreases activity-dependent release of excitatory transmitters from primary afferents without directly activating GABA-A receptors or binding opioid receptors. Which molecular target is most likely?",
    options:["Mu opioid receptor","Sodium channel alpha subunit","GABA transaminase","Alpha2delta auxiliary subunit of voltage-gated calcium channels","Cyclooxygenase-2 active site"],
    answer:"D",reason:"Gabapentin and pregabalin bind the alpha2delta auxiliary subunit of voltage-gated calcium channels, reducing activity-dependent release of excitatory neurotransmitters in pain pathways. Despite their names, they are not direct GABA receptor agonists. Their use is especially relevant to neuropathic pain.",
    why:["Opioids act through Gi/o-coupled mu receptors, not alpha2delta calcium-channel regulation.","Some antiseizure drugs reduce sodium-current availability, but that is not the canonical gabapentinoid target.","Vigabatrin inhibits GABA transaminase, thereby reducing GABA breakdown.","Alpha2delta binding is the distinguishing mechanism of gabapentinoids in neuropathic pain.","NSAIDs reduce prostaglandin synthesis through cyclooxygenase inhibition and are less targeted to neuropathic signaling."],
    takeaway:"Gabapentin/pregabalin target alpha2delta calcium-channel subunits, not GABA-A receptors.",
    hint:"The drug name resembles a neurotransmitter, but its actual binding target is a calcium-channel accessory subunit."},
    {id:446,stem:"Ten days after a diarrheal illness, a 31-year-old develops symmetric ascending weakness and loss of tendon reflexes. Nerve conduction shows slowed velocities and conduction block. Lumbar puncture reveals elevated CSF protein without a corresponding pleocytosis. Which structure is primarily being attacked?",
    options:["CNS oligodendrocyte myelin","Peripheral nerve and root myelin","Neuromuscular junction postsynaptic acetylcholine receptors","Spinal anterior horn cells","Cerebellar Purkinje neurons"],
    answer:"B",reason:"This is typical acute inflammatory demyelinating polyradiculoneuropathy (AIDP), a common form of Guillain-Barré syndrome. Immune-mediated injury to peripheral myelin and roots explains symmetric weakness, areflexia, conduction slowing and albuminocytologic dissociation. Monitor respiratory and autonomic function urgently.",
    why:["Oligodendrocytes myelinate CNS axons; AIDP is a peripheral demyelinating disease.","Immune injury to Schwann-cell myelin and roots matches the clinical and electrodiagnostic findings.","Myasthenia gravis causes fatigable weakness and often preserves reflexes and sensory conduction.","Anterior horn cell injury causes LMN weakness but not a primary demyelinating nerve-conduction pattern.","Purkinje-cell loss causes ataxia rather than a symmetric areflexic ascending neuropathy."],
    takeaway:"GBS/AIDP: postinfectious ascending weakness + areflexia + slowed peripheral conduction; CSF often has high protein with few cells.",
    hint:"Use the reflex findings and nerve-conduction pattern to distinguish CNS, PNS and neuromuscular junction disease."},
    {id:478,stem:"A 46-year-old develops pain from the low back down the lateral leg to the dorsum of the foot. Great-toe extension and ankle inversion are both weak, but plantarflexion and Achilles reflex are preserved. A fibular-head neuropathy is considered. Which lesion best accounts for the additional finding of weak inversion?",
    options:["Common fibular nerve at the fibular head","S1 nerve root","Tibial nerve in the popliteal fossa","L5 nerve root","L4 nerve root"],
    answer:"D",reason:"L5 radiculopathy weakens ankle dorsiflexion, great-toe extension and sometimes ankle inversion through tibialis posterior, which is supplied by the tibial nerve but receives L5 root input. Isolated common fibular neuropathy typically spares inversion. Preserved Achilles reflex and plantarflexion weigh against S1 localization.",
    why:["A common fibular lesion weakens dorsiflexion/eversion but usually spares inversion by tibialis posterior.","S1 injury tends to impair plantarflexion and the Achilles reflex and may affect lateral-foot sensation.","A tibial nerve lesion would prominently impair plantarflexion and inversion while sparing dorsiflexion.","Weak inversion in addition to foot drop supports a lesion proximal to the split of tibial and fibular nerves: L5 root.","L4 deficits more typically involve quadriceps/knee extension and the patellar reflex."],
    takeaway:"Foot drop with weak inversion suggests L5 radiculopathy; foot drop with spared inversion favors common fibular neuropathy.",
    hint:"Which inversion muscle receives tibial-nerve innervation but shares a root with dorsiflexors?"},
    {id:508,stem:"After thoracoabdominal aortic surgery, a patient develops abrupt bilateral leg paralysis and loss of pinprick sensation below T10. Testing reveals preserved vibration and joint-position sense in the feet. Which arterial territory was most likely compromised?",
    options:["Anterior spinal artery distribution","Posterior spinal artery distribution","Posterior inferior cerebellar artery distribution","Anterior inferior cerebellar artery distribution","Middle cerebral artery distribution"],
    answer:"A",reason:"The anterior spinal artery supplies much of the anterior two-thirds of the cord, including descending corticospinal and ascending anterolateral pathways. Dorsal columns are predominantly supplied by posterior spinal arteries and may be relatively preserved. Spinal ischemia is an important complication of aortic procedures.",
    why:["Motor and pain-temperature loss with dorsal-column sparing is characteristic of anterior-cord ischemia.","Posterior spinal artery infarction tends to impair vibration and position sense more prominently.","PICA supplies dorsolateral medulla and inferior cerebellum, not the long spinal-cord territory described.","AICA supplies lateral inferior pons and cerebellar structures rather than the thoracic spinal cord.","MCA infarction would give cerebral cortical or subcortical signs rather than a spinal sensory level."],
    takeaway:"Anterior cord: motor and pain/temperature impaired, vibration/position sense relatively spared.",
    hint:"Map the lost tracts and the spared tract before choosing the vessel."},
    {id:526,stem:"A patient sustains a penetrating injury to the right half of the spinal cord at T8. After the spinal shock period, examination reveals right leg spastic weakness, absent vibration in the right foot, and reduced pinprick sensation on the left beginning around T10. Which statement best explains the laterality?",
    options:["All ascending sensory fibers cross only after reaching the thalamus","Both dorsal column and spinothalamic tracts cross in the caudal medulla","Corticospinal fibers recross at every spinal segment","Dorsal column fibers ascend ipsilaterally in cord, whereas pain-temperature fibers cross shortly after entry","The right hemicord lesion directly damages only left-sided axons"],
    answer:"D",reason:"Brown-Séquard hemicord injury combines ipsilateral UMN weakness below the lesion (lateral corticospinal tract) and ipsilateral vibration/proprioception loss (dorsal column) with contralateral pain-temperature loss beginning about 1–2 segments lower (anterolateral tract fibers cross via anterior white commissure after ascending/descending briefly).",
    why:["The relevant pathways have different crossings in the cord and medulla, not only at the thalamus.","DCML crosses in the medulla; spinothalamic fibers cross within spinal segments.","The lateral corticospinal tract has already crossed at the pyramidal decussation and does not recross segmentally.","This correctly explains ipsilateral DCML loss and contralateral anterolateral deficit below the lesion.","A right cord lesion injures right-sided tracts, which can already carry information from the contralateral side."],
    takeaway:"Brown-Séquard: ipsilateral UMN and DCML deficits below lesion; contralateral pain/temperature deficit ~1–2 levels below.",
    hint:"Trace where each of the three major pathways crosses the midline."},
    {id:530,stem:"A 22-year-old slowly loses pinprick and temperature sensation across the shoulders and lateral arms while vibration, joint position and lower-limb strength remain normal. MRI shows a small expanding central cervical cavity. Which fibers are interrupted first?",
    options:["Fasciculus cuneatus fibers ascending ipsilaterally","Lateral corticospinal axons descending below the pyramidal decussation","Second-order pain-temperature axons crossing in the anterior white commissure","Medial lemniscus fibers in the caudal pons","Dorsal root ganglion cell bodies in C5 and C6"],
    answer:"C",reason:"A small central syrinx first interrupts decussating spinothalamic second-order axons in the anterior white commissure, giving bilateral segmental loss of pain and temperature in a cape-like distribution. As it enlarges, anterior horn and corticospinal deficits may appear, while dorsal columns may be spared early.",
    why:["Dorsal-column damage would primarily affect discriminative touch, vibration and proprioception.","Corticospinal injury would cause UMN weakness below the lesion rather than isolated cape-like sensory loss.","Crossing nociceptive fibers lie close to the central canal and are vulnerable to an expanding syrinx.","The medial lemniscus lies within the brainstem and conveys DCML modalities, not cervical commissural pain fibers.","A bilateral multiroot ganglion injury would usually yield a different distribution and is not explained by central canal expansion."],
    takeaway:"Syringomyelia: bilateral segmental pain-temperature loss from anterior white commissure injury; vibration/position often spared early.",
    hint:"The earliest deficits identify fibers that cross directly next to the central canal."},
    {id:484,stem:"A 32-year-old experiences a rising epigastric sensation followed by a strange smell, then stares and makes repetitive lip-smacking movements for 70 seconds. She is confused for several minutes afterward and cannot recall the event. Which seizure classification is most accurate?",
    options:["Typical absence seizure","Focal aware seizure without impaired awareness","Generalized myoclonic seizure","Atonic seizure","Focal impaired-awareness seizure, likely temporal onset"],
    answer:"E",reason:"An autonomic or olfactory aura followed by behavioral arrest, oral automatisms, impaired awareness, and postictal confusion indicates a focal impaired-awareness seizure, often of temporal-lobe origin. Typical absence episodes are shorter, often have 3-Hz generalized spike-wave EEG and little or no postictal confusion.",
    why:["Typical absence seizures are generally very brief, lack a focal aura, and end without a prolonged postictal state.","Awareness is impaired during the described episode, so it is not classified as fully focal aware.","Myoclonic seizures produce sudden brief jerks rather than a sustained automatism-associated spell.","Atonic seizures cause abrupt loss of muscle tone and falls, which are absent here.","The aura, automatisms and postictal confusion support temporal focal impaired-awareness onset."],
    takeaway:"Temporal focal impaired-awareness seizure: experiential/olfactory aura → automatisms → altered awareness → postictal confusion.",
    hint:"Use onset features, preservation of awareness, duration and postictal state together."},
    {id:538,stem:"A toxin is introduced to an isolated neuromuscular preparation. Nerve action potentials reach the motor terminal normally, but evoked endplate potentials are markedly reduced. Electron microscopy shows docked synaptic vesicles and the axon terminal still contains acetylcholine. Which immediate presynaptic signal is essential for normally triggering vesicle fusion?",
    options:["Opening of ligand-gated sodium channels in the muscle","Increased postsynaptic potassium conductance","Calcium entry through voltage-gated channels at the presynaptic terminal","Retrograde transport of vesicles toward the soma","Inactivation of axonal sodium channels before terminal arrival"],
    answer:"C",reason:"An arriving action potential depolarizes the nerve terminal, opening presynaptic voltage-gated Ca2+ channels. Local Ca2+ binds synaptotagmin and triggers SNARE-mediated membrane fusion and transmitter release. Docked vesicles without effective fusion indicate a defect in this terminal Ca2+-dependent coupling or fusion machinery.",
    why:["Postsynaptic sodium conductance occurs after acetylcholine has been released and bound nicotinic receptors.","Increasing muscle potassium conductance would alter postsynaptic excitability, not trigger presynaptic fusion.","Ca2+-synaptotagmin-SNARE signaling directly triggers release of the docked vesicles.","Retrograde transport carries cargo toward the neuronal soma and is not the rapid exocytotic trigger.","The stem specifies that impulses reach the terminal; axonal sodium-channel inactivation does not explain this isolated release deficit."],
    takeaway:"Nerve terminal AP → voltage-gated Ca2+ influx → synaptotagmin/SNARE fusion → neurotransmitter release.",
    hint:"Identify the ion that couples terminal depolarization to synaptic vesicle fusion."},
    {id:307,stem:"A 49-year-old develops irregular sleep timing after a lesion involving the anterior hypothalamus. Despite normal retinal vision, light exposure no longer reliably synchronizes her core temperature and melatonin rhythms to a 24-hour cycle. Which pathway and nucleus are implicated?",
    options:["Retinohypothalamic input to the suprachiasmatic nucleus","Hippocampal fornix to mammillary bodies","Mammillothalamic tract to anterior thalamus","Corticospinal tract to spinal anterior horn","Nigrostriatal dopamine input to caudate"],
    answer:"A",reason:"The suprachiasmatic nucleus (SCN) is the hypothalamic master circadian clock. Specialized retinal ganglion cells project through the retinohypothalamic tract, enabling light entrainment even when ordinary visual processing is otherwise preserved. Its outputs coordinate endocrine and autonomic daily rhythms.",
    why:["Retinal photic input to the SCN directly entrains the central circadian clock.","The fornix conveys hippocampal memory-related output, not the primary light synchronization signal.","Mammillothalamic projections participate in Papez memory circuitry.","Corticospinal fibers mediate voluntary motor output rather than circadian entrainment.","Nigrostriatal dopamine affects basal-ganglia motor function, not master circadian photic timing."],
    takeaway:"SCN receives retinal light input via the retinohypothalamic tract and synchronizes circadian physiology.",
    hint:"Which hypothalamic region acts as the clock, and how does light information reach it?"},
    {id:380,stem:"A professional singer has difficulty reaching high notes after thyroid surgery. Laryngoscopy shows normal vocal-fold abduction and adduction but reduced ability to tense the vocal folds. Which nerve was most likely injured?",
    options:["Internal branch of superior laryngeal nerve","External branch of superior laryngeal nerve","Recurrent laryngeal nerve","Glossopharyngeal nerve","Hypoglossal nerve"],
    answer:"B",reason:"The external superior laryngeal nerve supplies cricothyroid, which increases tension of the vocal folds and helps raise pitch. The recurrent laryngeal nerve supplies nearly all other intrinsic laryngeal muscles and is essential for abduction/adduction; intact gross movement with pitch loss favors external superior laryngeal injury.",
    why:["The internal superior laryngeal branch provides sensation above vocal folds, not primary cricothyroid motor supply.","Cricothyroid weakness with impaired high-pitch phonation points to the external superior laryngeal branch.","Recurrent laryngeal injury usually impairs intrinsic vocal-fold motion and can cause breathy dysphonia.","CN IX supplies stylopharyngeus and pharyngeal sensory functions, not cricothyroid.","CN XII supplies tongue muscles and would cause tongue movement abnormalities."],
    takeaway:"External superior laryngeal → cricothyroid → high pitch; recurrent laryngeal → all other intrinsic laryngeal muscles.",
    hint:"Separate the nerve for vocal-fold tension from the nerve for most vocal-fold movements."}
  ];
  for(const c of caseSet){
    const q=questions.find(x=>x.id===c.id);
    if(!q)continue;
    q.stem=c.stem;q.options=c.options;q.answer=c.answer;
    q.explanation=c.reason;q.keyTakeaway=c.takeaway;q.studyHint=c.hint;
    q.optionRationales=Object.fromEntries(c.why.map((why,i)=>[letters[i],why]));
    q.isCuratedClinical=true;
  }

  // Replace reverse-engineered stems which had named the correct concept
  // in the question itself. Reuse a matched clinical/experimental scenario.
  const matched=new Map(questions.filter(q=>q.concept_key?.endsWith(':forward')).map(q=>[q.concept_key,q]));
  let repaired=0;
  for(const q of questions){
    if(q.id<=100||q.isCuratedClinical)continue;
    const reverse=q.concept_key?.endsWith(':reverse');
    if(reverse){
      const twin=matched.get(q.concept_key.replace(/:reverse$/,':forward'));
      if(twin){
        const stem=twin.stem.replace(/\s+Which (?:localization|anatomic|predicted|mechanism|specific|finding|additional|clinical|neural|structure|pathological)[\s\S]*\?$/,'').replace(/\s+Which [^?]+\?$/,'').trim();
        if(stem.length>65){
          q.stem=stem+' Which additional finding or predicted consequence would most strongly support the same localization or mechanism?';
          repaired++;
        }
      }
      if(q.stem.includes('The leading hypothesis concerns ')){
        const start=(vignettes[q.topic]||'A patient undergoes focused neurologic examination and complementary testing.');
        const clue=String(q.keyTakeaway||q.explanation||'').replace(/\.$/,'');
        q.stem=start+' An associated mechanism is described by the following observation: '+clue+'. Which additional result or clinical manifestation would most strongly support the same mechanism?';
      }
    }else{
      q.stem=q.stem.replace(/Which localization, mechanism, or structure best explains the presentation\?$/,(
        /Medication|Antiepileptics|Pain Medications/.test(q.topic)?'Which pharmacologic target or physiological process best explains these effects?':
        /Histology|Neuropathology/.test(q.topic)?'Which histological structure or disease mechanism best explains these findings?':
        /Gross Anatomy/.test(q.topic)?'Which structure or anatomic relationship is most consistent with this specimen and clinical finding?':
        /Memory Formation|Synaptic Transmission|Action Potentials/.test(q.topic)?'Which cellular process or neural circuit best accounts for this observation?':
        'Which diagnosis, pathway, or mechanism best explains the findings?'
      ));
    }
  }

  const deepdives={
    "Action Potentials":["Resting voltage is governed largely by ionic gradients and membrane permeabilities, especially K+ permeability. The Na+/K+-ATPase maintains gradients but the fast action-potential phases reflect channel gating.","Distinguish sodium-channel inactivation (absolute refractory) from residual potassium conductance and partial sodium recovery (relative refractory). Myelin increases membrane resistance and decreases capacitance."],
    "Aging and Neurodegenerative Disorders":["Episodic-memory-predominant decline suggests Alzheimer disease; behavior/language changes may suggest frontotemporal degeneration; hallucinations, fluctuations and REM sleep behavior disorder suggest Lewy body dementia.","Screen for potentially reversible contributors such as B12 deficiency, thyroid dysfunction, medications and depression. Know amyloid/tau, alpha-synuclein, TDP-43 and huntingtin associations."],
    "Antiepileptics":["Mechanism pairings are high yield: ethosuximide—T-type Ca2+; phenytoin/carbamazepine/lamotrigine—Na+ channel inactivation; levetiracetam—SV2A; benzodiazepines—GABA-A opening frequency.","Use adverse effects to identify drugs: phenytoin gingival hyperplasia, lamotrigine serious rash, valproate hepatotoxicity and teratogenicity. Match therapy to seizure classification."],
    "Autonomics":["All autonomic preganglionic fibers release ACh at nicotinic receptors. Parasympathetic postganglionic fibers usually release ACh at muscarinic receptors; sympathetic fibers usually release NE at alpha/beta receptors.","Eccrine sweating is a sympathetic cholinergic exception. Horner syndrome denotes sympathetic interruption; injuries above T6 can produce autonomic dysreflexia."],
    "Axon Repair":["PNS regeneration depends on intact endoneurial guides, Schwann-cell support and clearing of distal Wallerian debris. In the CNS, inhibitory myelin-associated molecules and glial scarring reduce effective axon growth.","Distinguish death of the distal axon from the capacity of the proximal stump to regrow and reinnervate."],
    "Cauda Equina and Conus Medullaris":["Conus medullaris lesions often produce early sphincter/sexual dysfunction, relatively symmetric saddle symptoms and possible mixed UMN/LMN findings. Cauda equina root lesions typically give asymmetric radicular pain and LMN deficits.","Both syndromes can require urgent MRI and decompression, depending on the cause. Do not localize based solely on the presence of urinary symptoms."],
    "Corticospinal and UMN/LMN":["Corticospinal fibers largely decussate in the caudal medulla, so lesions above that level weaken the opposite body and lesions below it weaken the same body.","UMN findings include spasticity, increased reflexes and Babinski sign after the acute phase; LMN injury causes atrophy, fasciculations, hypotonia and reduced reflexes."],
    "Cranial Nerve Reflexes":["Corneal reflex afferent: CN V1; efferent: bilateral CN VII. Pupillary light reflex afferent: CN II; efferent: CN III parasympathetics.","Compare stimulation of both sides and response in both eyes to distinguish an afferent from an efferent lesion."],
    "Cranial Nerves Module":["Localize cranial neuropathies by combining motor, sensory and autonomic functions. Pupillary involvement in CN III palsy raises concern for compressive pathology; trochlear palsy classically worsens on downgaze.","For lower cranial nerves: CN IX contributes gag afferent; CN X contributes gag efferent and laryngeal/palatal motor; CN XII moves the tongue toward the weak side on protrusion."],
    "Embryological Disorders of CNS/PNS":["Neural-tube closure defects and abnormalities of hindbrain development may coexist. Myelomeningocele is strongly associated with Chiari II malformation and hydrocephalus.","Match the malformation to the embryologic stage, neural-tube region and associated structures rather than memorizing a single diagnosis."],
    "Embryology of CNS/PNS":["Sonic hedgehog from notochord/floor plate promotes ventral neural-tube identities, including motor neurons; BMP signaling promotes dorsal sensory-related regionalization.","Neural crest derivatives include much of the peripheral sensory/autonomic ganglia and Schwann cells; neural-tube derivatives include most CNS neurons and glia."],
    "Face Anatomy":["CN VII innervates muscles of facial expression; V3 supplies muscles of mastication and general sensory branches. The buccal branch of VII is motor, whereas the long buccal nerve of V3 is sensory.","Parotid secretomotor fibers begin with CN IX, synapse at the otic ganglion and travel with auriculotemporal nerve."],
    "Facial Embryology":["Cleft lip classically involves failed fusion of maxillary prominence with medial nasal prominence; secondary cleft palate involves failed fusion/elevation of lateral palatine shelves.","First-arch neural crest contributes jaw/ear-related structures; third and fourth pouches contribute thymus/parathyroid structures important in 22q11.2 deletion."],
    "Headaches":["Migraine aura typically involves gradual progression of positive neurologic phenomena; cluster headache causes short severe unilateral orbital pain with ipsilateral autonomic features and restlessness.","Thunderclap onset raises concern for subarachnoid hemorrhage. New headache with jaw claudication or visual symptoms in an older adult calls for urgent giant cell arteritis assessment."],
    "Histology Lab":["Cerebellar cortex: outer molecular layer, Purkinje-cell monolayer, inner granule layer. Purkinje cells provide inhibitory output to deep cerebellar nuclei.","Endoneurium surrounds individual axons, perineurium surrounds fascicles, and epineurium surrounds the entire peripheral nerve."],
    "Histology of CNS 1":["Oligodendrocytes myelinate multiple CNS axonal internodes; individual Schwann cells wrap one PNS internode. Astrocytes buffer extracellular K+ and support BBB-related homeostasis.","Nissl substance is rough ER/ribosomes in soma and dendrites but is absent from the axon hillock. Kinesin transports anterogradely; dynein retrogradely."],
    "Histology of CNS 2":["Neocortex has six layers, with prominent thalamic inputs to layer IV and major corticofugal output from layer V. Compare neuronal organization to cerebellar three-layer cortex.","Identify cells using location, surrounding neuropil, myelin and supporting tissue, not just cell size."],
    "Imaging Techniques":["Noncontrast CT is fast for acute hemorrhage. FLAIR suppresses free CSF and accentuates periventricular T2 lesions; DWI hyperintensity with low ADC suggests true diffusion restriction.","T1 postcontrast emphasizes blood-brain barrier disruption; susceptibility-weighted sequences detect blood products and mineralization."],
    "Increased Intracranial Pressure":["Papilledema, transient visual obscurations and sixth-nerve palsy can accompany elevated ICP. In suspected idiopathic intracranial hypertension, exclude mass and cerebral venous sinus thrombosis before LP.","Acetazolamide reduces CSF formation; urgent vision threats require specialist evaluation. Herniation syndromes depend on which structures become compressed."],
    "Neuroimaging Tutorial":["Standard axial radiologic convention displays the patient's right on the left side of the image. Check markers before localizing a lesion.","Acute hemorrhage is usually hyperdense on noncontrast CT, early ischemia may be subtle on CT, and diffusion MRI may detect acute infarction."],
    "Limbic System":["Amygdala circuits influence emotional salience and autonomic responses; hippocampus is essential for forming new declarative memories; hypothalamus couples motivational/limbic signals to physiology.","Papez circuit includes hippocampus → fornix → mammillary bodies → mammillothalamic tract → anterior thalamus → cingulate structures."],
    "Hypothalamus":["Suprachiasmatic nucleus receives retinohypothalamic light cues and regulates circadian rhythms. Supraoptic/paraventricular magnocellular cells produce ADH and oxytocin.","Stalk injury can decrease anterior pituitary drive but raise prolactin from loss of dopamine inhibition; distinguish central DI from primary renal water-handling defects."],
    "Memory Formation":["Explicit/declarative memory formation depends strongly on medial temporal hippocampal structures, whereas procedural skills depend more on basal-ganglia/cerebellar circuits.","Strong NMDA-dependent Ca2+ signals favor CaMKII-mediated AMPA insertion and LTP. More modest sustained Ca2+ can favor calcineurin/PP1 and AMPA removal for LTD."],
    "Multiple Sclerosis":["MS is inflammatory CNS demyelination with lesions disseminated in space and time; optic neuritis and internuclear ophthalmoplegia are classic presentations.","The MLF coordinates horizontal conjugate gaze. Contrast MS with ADEM's often monophasic postinfectious encephalopathy and other demyelinating conditions."],
    "Neck Anatomy":["External superior laryngeal nerve supplies cricothyroid (pitch); recurrent laryngeal supplies other intrinsic laryngeal muscles (including posterior cricoarytenoid abduction).","Spinal accessory nerve supplies sternocleidomastoid/trapezius; phrenic nerve courses on anterior scalene and carries C3–C5 fibers."],
    "Neuropathology Lab":["Alzheimer disease shows amyloid plaques and tau neurofibrillary tangles; Parkinson/Lewy pathology contains alpha-synuclein; prion disease causes spongiform degeneration.","Match pathology to the affected region and clinical tempo: rapid cognitive decline suggests a different differential from decades of progressive ataxia or dementia."],
    "Neuropathology of Neurodegenerative Diseases Lecture":["Intraneuronal tau, TDP-43, alpha-synuclein, and huntingtin aggregates are not interchangeable; use anatomic distribution and presenting syndrome to choose among them.","Huntington disease causes striatal degeneration and often chorea; Friedreich ataxia involves long-tract degeneration and may include cardiomyopathy."],
    "Pain and Pain Pathways":["Pain-temperature afferents enter the cord, traverse Lissauer's tract briefly, synapse in dorsal horn and cross in the anterior white commissure before ascending contralaterally.","Allodynia is pain from a normally nonpainful stimulus; hyperalgesia is excess pain from a painful stimulus. Descending PAG/RVM circuits can modulate dorsal horn transmission."],
    "Pain Medications":["Mu opioid receptors signal through Gi/o, reduce presynaptic calcium entry and increase postsynaptic potassium conductance. Naloxone competitively reverses opioid effects.","Gabapentinoids bind alpha2delta calcium-channel subunits. SNRIs can improve neuropathic pain through descending monoamine inhibition; NSAIDs inhibit COX-derived prostaglandins."],
    "Peripheral Neuropathies":["Distal symmetric length-dependent sensory loss favors polyneuropathy; multifocal asymmetric deficits suggest mononeuritis multiplex; slowed nerve conduction and temporal dispersion suggest demyelination.","AIDP/GBS often follows infection and causes areflexic ascending weakness. Distinguish B12 deficiency's posterior-column findings from isolated small-fiber neuropathy."],
    "Radiculopathy":["Use myotomal weakness, dermatomal sensory changes and reflexes together. L5 root disease can weaken ankle inversion; common fibular neuropathy usually spares it.","L4 often affects quadriceps/patellar reflex; S1 often affects plantarflexion/Achilles reflex. A single nerve injury does not explain weakness across several peripheral nerves sharing one root."],
    "Seizures and Epilepsy":["A focal aura, automatisms and postictal confusion favor focal impaired-awareness seizure; typical absence attacks are brief with 3-Hz generalized spike-wave and minimal postictal state.","Todd paralysis is transient postictal weakness and can mimic stroke; status epilepticus requires rapid treatment rather than awaiting spontaneous resolution."],
    "Somatosensory Receptors and Tracts":["DCML carries vibration, proprioception and discriminative touch ipsilaterally in spinal cord, crosses in caudal medulla and projects to VPL. Facial somatosensation generally projects to VPM.","Pacinian corpuscles rapidly adapt to high-frequency vibration; Merkel receptors slowly adapt to edges/pressure; Meissner receptors sense light flutter; Ruffini endings sense stretch."],
    "Spinal Cord":["Anterior spinal arterial supply includes motor and anterolateral pathways; dorsal columns are often preserved in anterior cord infarction.","Conus is typically around L1–L2 in adults; lumbar cistern extends caudally. Dorsal horn processes incoming somatosensory input; T1–L2 intermediolateral columns house sympathetic preganglionic cells."],
    "Spinal Cord Cross-Sectional Anatomy":["Thoracic segments have lateral horns and relatively small ventral horns; cervical enlargement has larger ventral gray matter. Fasciculus cuneatus is present above about T6.","Compare gray/white proportions, lateral-horn presence and dorsal-column subdivisions to identify spinal level."],
    "Spinal Syndromes":["Brown-Séquard: ipsilateral corticospinal/DCML loss and contralateral pain-temperature loss starting about 1–2 segments below injury.","Central cord injury can affect arms more than legs; anterior cord injury impairs motor and pain-temperature with spared dorsal-column modalities; syrinx affects commissural pain fibers first."],
    "Synaptic Transmission and Neurotransmitters":["An action potential opens terminal Ca2+ channels; Ca2+ binding to synaptotagmin engages SNARE-mediated exocytosis. Botulinum toxin disrupts release by cleaving SNARE proteins.","Temporal summation integrates repeated input from one synapse; spatial summation integrates multiple inputs. GABA-A is fast ionotropic chloride conductance; GABA-B is metabotropic."],
    "Gross Anatomy Lab · Face":["Use facial landmarks and skull foramina to localize V versus VII branches. The pterion overlies middle meningeal artery and relates to epidural hematoma risk.","Identify a structure in the figure first, then infer the motor/sensory loss that selective injury would produce."],
    "Gross Anatomy Lab · Neck":["Recurrent laryngeal and superior laryngeal branches are at risk in thyroid-related surgery; determine whether pitch, abduction or sensation is affected.","Locate carotid sheath structures, phrenic nerve on anterior scalene and spinal accessory nerve in posterior triangle."],
    "Gross Anatomy Lab · External CNS":["Use frontal/parietal/temporal relationships and the central sulcus. Medial paracentral lobule contains the leg motor representation.","Correlate gross landmarks to function: precentral is primary motor, postcentral is primary sensory, and corpus callosum is the major interhemispheric commissure."],
    "Gross Anatomy Lab · Internal CNS":["Lateral ventricles neighbor caudate, corpus callosum and fornix; the internal capsule contains densely packed projection fibers.","Identify gray nuclei versus white matter tracts before inferring contralateral versus ipsilateral clinical deficits."],
    "Gross Anatomy Lab · Limbic and cross-section":["Hippocampus lies medially in temporal lobe and is key for declarative-memory formation; mammillary bodies and anterior thalamus participate in Papez circuit.","Differentiate internal capsule, thalamus and basal-ganglia nuclei in sectional views using relative positions."],
    "Gross Anatomy Lab · Brainstem, BG, Cerebellum":["Brainstem levels can be distinguished by cranial nerve exits, olives, peduncles and fourth ventricle relationships.","Globus pallidus is medial to putamen, and cerebellar vermis is important for axial coordination."],
    "Gross Anatomy Lab · Brainstem":["Cranial nerve exit sites and major tracts guide brainstem localization; use dorsal versus ventral surface landmarks.","Crossed findings (ipsilateral cranial nerve plus contralateral long-tract deficit) strongly suggest a brainstem lesion."],
    "Gross Anatomy Lab · Cerebellum":["Vermis is associated with axial posture and gait; hemispheres contribute to ipsilateral limb coordination.","Purkinje cells provide the sole inhibitory output of cerebellar cortex to the deep nuclei."],
    "Gross Anatomy Lab · Basal Ganglia":["Caudate plus putamen make the striatum; putamen plus globus pallidus make the lentiform nucleus.","Direct and indirect basal-ganglia pathways modulate movement initiation; localize named nuclei on cross-sections."]
  };
  const hintCues={
    "Action Potentials":"Track membrane voltage, sodium-channel availability and potassium conductance separately.",
    "Memory Formation":"Classify the memory system and identify whether the question tests circuitry or synaptic plasticity.",
    "Spinal Syndromes":"Locate the lesion, trace each tract's decussation and then determine the affected side.",
    "Somatosensory Receptors and Tracts":"Choose the modality first and work from the receptor to thalamus, noting every crossing.",
    "Peripheral Neuropathies":"Distinguish focal nerve, root, generalized axonal and generalized demyelinating patterns.",
    "Antiepileptics":"Match the seizure type to the circuit and the medication's molecular target.",
    "Multiple Sclerosis":"Identify whether the signs localize to CNS white matter, then evaluate time and space.",
    "Headaches":"Use onset, attack duration, autonomic features and red flags before picking therapy."
  };
  for(const q of questions){
    q.midtermDeepDive=deepdives[q.topic]||[
      "Apply the specific lecture objective to the observed anatomy or physiology and distinguish the key competing mechanisms.",
      "A strong answer should explain the lesion site or molecular target, expected downstream changes and why the nearest distractor fails."
    ];
    if(q.id<=100)q.isCuratedClinical=true;
    if(!q.studyHint)q.studyHint=hintCues[q.topic]||"Identify the decisive clue, localize the pathway or structure, then eliminate choices that predict a different finding.";
    if(!caseSet.some(c=>c.id===q.id)){
      // Avoid the prior duplicated teaching sentence visible in many generated cards.
      const raw=String(q.explanation||'').trim();
      const first=String(q.optionRationales?.[q.answer]||'').trim();
      const note=q.midtermDeepDive[0];
      if(q.id>100){
        q.explanation=(first&&first!==q.keyTakeaway?first+' ':'')+note;
        q.keyTakeaway=q.keyTakeaway||note;
      }else if(raw){
        q.explanation=raw;
      }
      for(let i=0;i<5;i++){
        const letter=letters[i];
        if(letter===q.answer)continue;
        const text=String(q.optionRationales?.[letter]||'');
        if(text.startsWith('This alternative does not account')||text.length<16){
          q.optionRationales[letter]='This option predicts a different neural structure or mechanism. '+q.midtermDeepDive[1];
        }
      }
    }
  }

  // Rotate each correct answer to a balanced A–E position, then shuffle the
  // remaining distractors deterministically. Preserve local saved results
  // by remapping letter-based answers and crossouts once per browser.
  function permute(seed,arr){
    const out=arr.slice();let s=(seed^0x9e3779b9)>>>0;
    for(let i=out.length-1;i>0;i--){s=(Math.imul(s,1664525)+1013904223)>>>0;const j=s%(i+1);[out[i],out[j]]=[out[j],out[i]];}
    return out;
  }
  const migrations={},previousInverse={};
  for(const q of questions){
    const old=q.options.map((value,i)=>({value,letter:letters[i],why:q.optionRationales?.[letters[i]]||''}));
    const chosen=old.find(x=>x.letter===q.answer);if(!chosen||old.length!==5)continue;
    const block=Math.floor((q.id-1)/5);
    const target=permute(0x21ed59+block*1709,[0,1,2,3,4])[(q.id-1)%5];
    const previousTarget=(q.id*7+Math.floor(q.id/6)*3)%5;
    const previousWrong=permute(q.id*827+1543,old.filter(x=>x!==chosen));
    const previousItems=[];let previousI=0;
    for(let i=0;i<5;i++)previousItems.push(i===previousTarget?chosen:previousWrong[previousI++]);
    previousInverse[q.id]=Object.fromEntries(previousItems.map((x,i)=>[letters[i],x.letter]));
    const wrong=permute(q.id*827+1543,old.filter(x=>x!==chosen));
    const fresh=[];let k=0;for(let i=0;i<5;i++)fresh.push(i===target?chosen:wrong[k++]);
    const map={};fresh.forEach((x,i)=>{map[x.letter]=letters[i]});
    migrations[q.id]=map;
    q.options=fresh.map(x=>x.value);q.answer=letters[target];
    q.optionRationales=Object.fromEntries(fresh.map((x,i)=>[letters[i],x.why]));
  }
  try{
    const versionKey='neuroprep-choice-order-v3';
    const storedVersion=localStorage.getItem(versionKey);
    if(storedVersion!=='balanced-2026-11'){ 
      const stateKey='neuroprep-midterm-v1';
      const prior=JSON.parse(localStorage.getItem(stateKey)||'null');
      if(prior){
        const migrateLetter=(id,letter)=>{const original=storedVersion==='stable-2026-11'?(previousInverse[id]?.[letter]||letter):letter;return migrations[id]?.[original]||letter;};
        const remap=(obj)=>{if(!obj||typeof obj!=='object')return;for(const id of Object.keys(obj)){if(typeof obj[id]==='string')obj[id]=migrateLetter(id,obj[id]);}};
        for(const h of prior.history||[]){remap(h.answers);let score=0;for(const id of h.ids||[]){const q=questions.find(x=>x.id===Number(id));if(q&&h.answers?.[id]===q.answer)score++}h.correct=score;}
        if(prior.active){remap(prior.active.answers);for(const [id,arr] of Object.entries(prior.active.crossouts||{}))if(Array.isArray(arr))prior.active.crossouts[id]=arr.map(x=>migrateLetter(id,x));}
        localStorage.setItem(stateKey,JSON.stringify(prior));
      }
      localStorage.setItem(versionKey,'balanced-2026-11');
    }
  }catch(e){console.warn('Saved choice-order migration could not complete',e);}

  // The HTML application renders a fresh shell after every answer. Enhance
  // its live DOM only after rendering without altering exam scoring.
  const uiStyle=document.createElement('style');
  uiStyle.textContent=[
    '.q-stem{font-size:15.5px!important;line-height:1.63!important;font-weight:570!important;letter-spacing:-.012em!important}',
    '.option{font-size:13.5px!important;line-height:1.55!important;padding:13px 14px!important}',
    '.option-text{font-size:inherit}.crossout-btn{flex-basis:39px!important;font-size:16px!important}',
    '.crossout-hint{font-size:11.5px!important;line-height:1.55!important;opacity:.85}',
    '.rationale>p{font-size:13.6px!important;line-height:1.72!important}',
    '.midterm-deepdive{margin-top:19px;border-top:1px solid var(--border);padding-top:16px}',
    '.midterm-deepdive h4{font-size:12px;letter-spacing:.09em;text-transform:uppercase;color:var(--mint);margin:0 0 9px}',
    '.midterm-deepdive p{font-size:13.2px;line-height:1.7;margin:6px 0 10px;color:var(--ink)}',
    '.np-toolbox{display:flex;gap:7px;align-items:center;flex-wrap:wrap}',
    '.np-tool{border:1px solid var(--border);border-radius:9px;padding:6px 10px;background:var(--card-2);color:var(--ink);font-size:11.5px;font-weight:700;line-height:1.5;white-space:nowrap}',
    '.np-tool:hover{border-color:var(--mint)}',
    '.np-hintbox{border:1px dashed var(--strong-border);border-radius:12px;background:var(--soft);padding:11px 14px;margin:0 0 14px;font-size:12.5px;line-height:1.7;color:var(--muted)}',
    '.np-modal{position:fixed;inset:0;z-index:90;background:rgba(4,11,24,.84);display:grid;place-items:center;padding:16px}',
    '.np-game{width:min(100%,540px);max-height:92dvh;overflow:auto;border:1px solid var(--strong-border);background:var(--pane);border-radius:18px;padding:23px;color:var(--ink);box-shadow:0 24px 90px #0005}',
    '.np-game h2{font-size:22px;margin:0 0 7px}.np-game p{line-height:1.7;color:var(--muted);font-size:14px}',
    '.np-choice{display:block;width:100%;text-align:left;border-radius:10px;border:1px solid var(--border);background:var(--card-2);color:var(--ink);padding:11px 13px;margin:8px 0;font-size:13px}',
    '.np-choice:hover{border-color:var(--mint)}.np-choice:disabled{opacity:1;cursor:default}',
    '.np-choice.np-right{border-color:#31aa87;background:rgba(56,170,125,.17)}',
    '.np-choice.np-wrong{border-color:#da627a;background:rgba(225,90,100,.14)}',
    'body.np-focus .rail{display:none!important}body.np-focus .session-grid{grid-template-columns:minmax(0,1fr)!important}',
    'body.np-focus .question-card{max-width:880px;margin:0 auto}',
    '.np-session-meta{font-size:11px;color:var(--muted);margin-top:6px}',
    '@media(max-width:540px){.topline{flex-wrap:wrap}.top-meta{width:100%;justify-content:flex-end;flex-wrap:wrap}.q-stem{font-size:14.5px!important;line-height:1.62!important}.option{font-size:12.8px!important;padding:11px 10px!important}.crossout-btn{flex-basis:32px!important}.question-card{padding:16px 12px!important}.np-tool{font-size:10.5px;padding:6px 8px}.np-game{padding:17px}}'
  ].join('\n');
  document.head.appendChild(uiStyle);

  const miniQuestions=[
    ["A patient cannot adduct the right eye on left gaze; convergence is intact. Which tract is damaged?",["Right MLF","Left CN VI","Right optic nerve","Left PPRF"],0,"INO localizes to the MLF on the side of the eye failing adduction."],
    ["A left T7 hemicord injury damages the anterolateral tract. Which pain-temperature deficit appears below it?",["Left body from T7","Right body beginning about T9","Bilateral face","Left vibration only"],1,"Spinothalamic fibers cross soon after entry, so deficit is contralateral below the lesion."],
    ["What is the key postganglionic transmitter at most eccrine sweat glands?",["Norepinephrine","GABA","Acetylcholine","Dopamine"],2,"Sweat glands are a sympathetic cholinergic exception."],
    ["Which structure provides inhibitory output from cerebellar cortex?",["Granule cells","Purkinje cells","Bergmann glia","Dentate nucleus"],1,"Purkinje neurons are GABAergic output neurons of the cerebellar cortex."],
    ["A patient has hyperreflexia, spasticity and Babinski sign after a cord lesion. This is primarily which pattern?",["Upper motor neuron","Lower motor neuron","Neuromuscular junction","Peripheral sensory nerve"],0,"A lesion of descending motor pathways produces the UMN pattern after the acute phase."],
    ["Which imaging finding supports acute restricted diffusion?",["High ADC","Low ADC with high DWI signal","Bright CSF on FLAIR","No CT contrast enhancement"],1,"True restriction typically has DWI brightness and reduced ADC."],
    ["Which receptor is blocked by ethosuximide's main therapeutic mechanism?",["T-type calcium channel","Mu-opioid receptor","Muscarinic M2 receptor","D2 receptor"],0,"Typical absence seizures rely on thalamocortical T-type Ca2+ currents."],
    ["Loss of high-pitch phonation with preserved fold abduction most strongly indicates injury to:",["Recurrent laryngeal nerve","External superior laryngeal nerve","Internal superior laryngeal nerve","Hypoglossal nerve"],1,"Cricothyroid is innervated by external superior laryngeal nerve."],
    ["Which afferent pathway carries the corneal reflex?",["CN VII","CN III","CN V1","CN IX"],2,"CN V1 is afferent, while CN VII supplies bilateral motor blink."],
    ["Which synaptic change most directly expresses classical LTD?",["Inserting more AMPA receptors","Increasing CA3 axons","Internalizing postsynaptic AMPA receptors","Increasing CaMKII phosphorylation"],2,"Phosphatase signaling and AMPA receptor endocytosis weaken the excitatory synapse."],
    ["In AIDP, slowed conduction and areflexia most strongly localize damage to:",["CNS oligodendrocytes","Peripheral Schwann-cell myelin","Motor cortex","Muscle sarcomeres"],1,"AIDP affects peripheral nerve/root myelin and may show albuminocytologic dissociation."],
    ["Which memory is most likely spared after bilateral hippocampal destruction?",["Learning a new episodic story","Remembering yesterday's lunch","Improving a practiced motor sequence","Forming new declarative memories"],2,"Procedural learning can remain intact without hippocampal declarative encoding."]
  ];
  let game=null;
  function openSprint(){
    const selected=permute(Date.now()%4294967295,miniQuestions).slice(0,6);
    game={items:selected,index:0,score:0,answered:false,choice:null};
    const modal=document.createElement('div');modal.className='np-modal';modal.id='np-sprint-modal';
    modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Neuro Sprint practice break');
    modal.innerHTML='<section class="np-game"><div class="np-toolbox" style="justify-content:space-between"><span class="tag mint">⚡ Neuro Sprint · Quick brain break</span><button type="button" class="np-tool" data-np="close-sprint">✕ Close</button></div><div id="np-sprint-body"></div></section>';
    document.body.appendChild(modal);
    drawSprint();
  }
  function drawSprint(){
    const pane=document.getElementById('np-sprint-body');if(!pane||!game)return;
    if(game.index>=game.items.length){
      pane.innerHTML='<h2 style="margin-top:18px">Sprint complete! 🧠</h2><p>You scored <strong>'+game.score+' / '+game.items.length+'</strong>. These are bonus recall questions; they do not affect exam scores.</p><div class="np-toolbox"><button class="btn primary" type="button" data-np="restart-sprint">Play again</button><button class="btn" type="button" data-np="close-sprint">Back to studying</button></div>';
      return;
    }
    const q=game.items[game.index];
    pane.innerHTML='<p class="np-session-meta">Quick question '+(game.index+1)+' of '+game.items.length+' · '+game.score+' correct</p><h2 style="font-size:18px">'+q[0]+'</h2>'+q[1].map((o,i)=>'<button type="button" class="np-choice '+(game.answered?(i===q[2]?'np-right':(i===game.choice?'np-wrong':'')):'')+'" data-np="sprint-answer" data-index="'+i+'" '+(game.answered?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+o+'</button>').join('')+(game.answered?'<p>'+q[3]+'</p><button type="button" class="btn primary" data-np="sprint-next">Next →</button>':'');
  }
  function enhanceScreen(){
    const app=document.getElementById('app');if(!app)return;
    if(!app.querySelector('[data-np="sprint"]')){
      const meta=app.querySelector('.top-meta');
      if(meta){
        const b=document.createElement('button');b.type='button';b.className='np-tool';b.dataset.np='sprint';b.textContent='⚡ Neuro Sprint';
        meta.insertBefore(b,meta.firstChild);
        const focus=document.createElement('button');focus.type='button';focus.className='np-tool';focus.dataset.np='focus';
        focus.textContent=document.body.classList.contains('np-focus')?'◎ Exit focus':'◎ Focus';
        meta.insertBefore(focus,meta.firstChild);
      }
    }
    const cta=app.querySelector('.hero .cta-row');
    if(cta&&!cta.querySelector('[data-np="hard40"]')){
      const b=document.createElement('button');b.type='button';b.className='btn primary';
      b.dataset.np='hard40';b.textContent='🧠 Start 40 hard clinical cases';
      cta.appendChild(b);
    }
    const card=app.querySelector('.question-card');
    if(card&&!card.querySelector('.np-quality-tag')){
      const num=Number(card.querySelector('.q-num')?.textContent.match(/\d+/)?.[0]);
      const q=questions.find(x=>x.id===num);
      if(q){const label=document.createElement('span');label.className='tag np-quality-tag';label.textContent=q.isCuratedClinical?'✓ Authored clinical case':'Concept reinforcement';card.querySelector('.q-meta')?.appendChild(label);}
    }
    if(card&&!card.querySelector('[data-np="hint"]')){
      const num=card.querySelector('.q-num')?.textContent||'';
      const q=questions.find(x=>x.id===Number(num.match(/\d+/)?.[0]||-1));
      const stem=card.querySelector('.q-stem');
      if(stem&&q&&/STUDY MODE/.test(app.querySelector('.session-header .eyebrow')?.textContent||'')){
        const row=document.createElement('div');row.className='np-toolbox';row.style.margin='-4px 0 17px';
        row.innerHTML='<button type="button" class="np-tool" data-np="hint" aria-expanded="false">💡 Reasoning hint</button><span class="np-session-meta">Hint is optional; answer stays hidden.</span>';
        stem.after(row);
        const box=document.createElement('div');box.className='np-hintbox';box.hidden=true;box.textContent=q.studyHint;row.after(box);
      }
    }
    app.querySelectorAll('.rationale').forEach(node=>{
      if(node.querySelector('.midterm-deepdive'))return;
      const container=node.closest('.question-card,.review-item');let id;
      if(container?.classList.contains('question-card'))id=Number(container.querySelector('.q-num')?.textContent.match(/\d+/)?.[0]);
      else id=Number(container?.querySelector('.review-title')?.textContent.match(/#(\d+)/)?.[1]);
      const q=questions.find(x=>x.id===id);
      if(!q)return;
      const el=document.createElement('section');el.className='midterm-deepdive';
      const header=document.createElement('h4');header.textContent='Midterm must-know · '+q.topic;el.appendChild(header);
      (q.isCuratedClinical?(q.midtermDeepDive||[]):(q.midtermDeepDive||[]).slice(1)).forEach((v,i)=>{const p=document.createElement('p');p.textContent=(i===0&&q.isCuratedClinical?'Mechanism: ':'Exam discriminator: ')+v;el.appendChild(p)});
      node.appendChild(el);
    });
  }
  try{if(localStorage.getItem('neuroprep-focus-mode')==='yes')document.body.classList.add('np-focus')}catch(e){}
  document.addEventListener('click',event=>{
    const btn=event.target.closest('[data-np]');if(!btn)return;
    const action=btn.dataset.np;
    if(action==='hard40'){
      try{
        const key='neuroprep-midterm-v1';
        const state=JSON.parse(localStorage.getItem(key)||'{}');
        if(state.active&&!confirm('Replace your current unfinished session with a 40-question hard clinical drill?'))return;
        const ids=permute(Date.now(),questions.filter(q=>q.isCuratedClinical).map(q=>q.id)).slice(0,40);
        state.active={ids,mode:'study',timed:false,minutes:120,answers:{},verified:{},crossouts:{},flags:[],index:0,startedAt:Date.now()};
        state.screen='quiz';
        localStorage.setItem(key,JSON.stringify(state));
        window.location.reload();
      }catch(e){alert('Could not start clinical drill; check browser storage.');}
      return;
    }
    if(action==='sprint'){openSprint();return;}
    if(action==='focus'){document.body.classList.toggle('np-focus');const active=document.body.classList.contains('np-focus');try{localStorage.setItem('neuroprep-focus-mode',active?'yes':'no')}catch(e){};btn.textContent=active?'◎ Exit focus':'◎ Focus';return;}
    if(action==='hint'){const box=btn.parentElement.nextElementSibling;if(box){box.hidden=!box.hidden;btn.setAttribute('aria-expanded',String(!box.hidden))}return;}
    if(action==='close-sprint'){document.getElementById('np-sprint-modal')?.remove();game=null;return;}
    if(action==='restart-sprint'){document.getElementById('np-sprint-modal')?.remove();openSprint();return;}
    if(action==='sprint-answer'&&game&&!game.answered){game.choice=Number(btn.dataset.index);game.answered=true;if(game.choice===game.items[game.index][2])game.score++;drawSprint();return;}
    if(action==='sprint-next'&&game){game.index++;game.answered=false;game.choice=null;drawSprint();return;}
  },true);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('np-sprint-modal')){document.getElementById('np-sprint-modal').remove();game=null;}});
  document.addEventListener('DOMContentLoaded',()=>{
    enhanceScreen();
    const host=document.getElementById('app');if(host)new MutationObserver(()=>enhanceScreen()).observe(host,{childList:true,subtree:false});
  });
  window.NEUROPREP_REFINED_VERSION='2026-11-04-clinical-v3.1';
  window.NEUROPREP_CURATED_CASES=100+caseSet.length;
  window.NEUROPREP_REPAIRED_STEMS=repaired;

})();