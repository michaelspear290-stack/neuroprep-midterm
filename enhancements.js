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
  window.NEUROPREP_REFINED_VERSION='2026-11-03';
})();