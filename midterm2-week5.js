/* Week 5 authored clinical questions: auditory, vestibular, visual systems. */
(()=>{
'use strict';
const A=window.NP2_ADD;if(!A)throw Error('Load midterm2-questions.js first');
const EAR='Ear Anatomy & Neurophysiology',VEST='Vestibular Anatomy & Neurophysiology',VERT='Dizziness & Vertigo',EYE='Structures of the Eye and Retina',VF='Visual Fields & Deficits',EOM='Extra-Ocular Movements & Oculomotion Neuropathies',AUTO='Sympathetics and Parasympathetics of the Eye',NY='Nystagmus',TASTE='Taste and Smell',GL='Glaucoma',HEAR='Hearing Loss and Evaluation',RET='Retinopathy / Macular Degeneration',EXAM='Basic Eye and Orbit Exam';
A(EAR,1,'Sound reaches the tympanic membrane of a healthy ear. Which anatomical sequence correctly transfers mechanical vibration into cochlear fluid?',
'Tympanic membrane → malleus → incus → stapes → oval window|Tympanic membrane → incus → malleus → stapes → round window|Tympanic membrane → stapes → malleus → incus → oval window|Tympanic membrane → cochlear duct → ossicles → oval window|Tympanic membrane → eustachian tube → stapes → semicircular canal',
0,'The stapes footplate contacts the oval window after the malleus and incus relay vibration.|Ossicular order is wrong; the round window mainly accommodates fluid movement.|The stapes is the final ossicle, not the first.|Cochlear fluid is driven after the ossicular chain, not before it.|The auditory tube equalizes middle-ear pressure; it is not the sound-transmitting route.',
'Ossicles improve impedance matching from air to cochlear fluid; the oval window receives stapes motion, while the round window permits compensatory displacement.',
'Sound path: tympanic membrane → malleus → incus → stapes → oval window.',
'Recall which ossicle attaches to the tympanic membrane and which occupies the oval window.');
A(EAR,2,'A researcher bends cochlear hair-cell stereocilia toward the tallest stereocilium. Which ionic event initiates hair-cell depolarization under normal conditions?',
'Potassium enters the hair cell from potassium-rich endolymph|Sodium leaves the hair cell into perilymph|Chloride exits through voltage-gated channels from endolymph|Calcium efflux directly opens the mechanotransduction channel|Glutamate enters the hair cell from the auditory nerve',
0,'Mechanical tip-link tension opens channels and K+ enters from K+-rich endolymph, depolarizing hair cells.|Hair-cell receptor depolarization is not initiated by Na+ efflux into perilymph.|Chloride efflux is not the canonical initial mechanotransduction current.|Ca2+ participates downstream, but the initial cation current is from endolymph.|Hair cells release glutamate onto CN VIII afferents; it is not the entering transmitter.',
'Unlike typical neurons, hair cells are bathed apically in K+-rich endolymph; bending toward tall stereocilia increases cation conductance and transmitter release.',
'Endolymph high K+ makes stereocilia deflection cause K+ influx and depolarization.',
'Which fluid contacts stereocilia, and how is its ionic composition unusual?');
A(EAR,3,'A unilateral small lesion damages the left lateral lemniscus above the level of the superior olive while sparing both cochlear nerves. Which deficit is most expected?',
'Subtle abnormalities in sound localization or processing rather than complete left-ear deafness|Complete deafness in the left ear|Complete deafness in the right ear|Selective loss of taste from the left anterior tongue|Bilateral conductive hearing loss with a normal brainstem',
0,'Auditory pathways project bilaterally above cochlear nuclei; unilateral central lesions usually do not cause total unilateral deafness.|Total unilateral deafness generally indicates peripheral cochlear/CN VIII or early cochlear nuclear injury.|A central unilateral lemniscal lesion does not eliminate all input from the opposite ear.|Taste travels in separate gustatory pathways.|Conductive hearing loss concerns outer/middle ear transmission, not brainstem auditory pathways.',
'The central auditory system becomes highly bilateral near the superior olivary complex, so cortical/brainstem unilateral lesions seldom abolish hearing in one ear.',
'Unilateral profound hearing loss localizes more peripherally than unilateral lateral-lemniscus injury.',
'At what level do auditory projections begin crossing and distributing bilaterally?');
A(VEST,1,'A patient moves an elevator straight upward and then stops. Which sensory structure most directly detects the associated linear acceleration?',
'Otolith organs of utricle and saccule|Horizontal semicircular canal crista alone|Cochlear inner hair cells|Spiral ganglion|Superior olivary nucleus',
0,'Utricle and saccule contain maculae with otoconia sensing linear acceleration and gravity.|Semicircular canals detect angular acceleration, not the dominant linear signal.|Cochlear hair cells transduce sound.|Spiral ganglion carries auditory afferents.|Superior olive processes bilateral auditory cues.',
'Otolith organs detect head tilt relative to gravity and translational acceleration; semicircular canals detect head rotation.',
'Utricle/saccule = linear acceleration; semicircular canals = angular acceleration.',
'Distinguish translation of the head from rotation.');
A(VEST,2,'During a rapid passive head turn to the right, a healthy subject maintains fixation on a stationary target straight ahead. Which eye movement is generated by the vestibulo-ocular reflex?',
'Both eyes move left at approximately the same angular speed|Both eyes move right at approximately the same angular speed|Both eyes converge toward the nose|Both pupils constrict without moving the eyes|The eyes stop moving until the head reaches rest',
0,'The VOR counter-rotates eyes opposite the head to stabilize retinal images.|Eye movement with the head would make the visual target slip farther across the retina.|Vergence adjusts for target depth, not head rotation compensation.|Pupil reflexes are not the main compensatory response.|VOR operates rapidly during head motion.',
'The vestibulo-ocular reflex links canal input through vestibular nuclei and ocular motor circuitry so the eyes rotate oppositely to the head.',
'Head right → eyes left for stable gaze.',
'Think about how the eyes must move to keep looking at a fixed object.');
A(VERT,2,'A 54-year-old experiences brief spinning episodes when rolling over in bed. The symptoms resolve in under a minute. Dix-Hallpike testing reproduces a short burst of torsional-upbeating nystagmus. What is the most appropriate initial targeted treatment?',
'Canalith repositioning with the Epley maneuver|Long-term oral prednisone for presumed vestibular neuritis|Urgent thrombolysis without evidence of stroke|Carbamazepine for an absence seizure|Routine tympanostomy tube placement',
0,'Brief position-triggered vertigo with characteristic Dix-Hallpike findings indicates posterior canal BPPV, often treated by Epley repositioning.|Vestibular neuritis causes persistent acute vertigo lasting hours to days.|BPPV findings alone do not establish ischemic stroke requiring thrombolysis.|Absence seizures do not present with stereotyped brief positional spinning and torsional nystagmus.|Middle-ear ventilation does not reposition displaced otoconia.',
'Displaced otoconia in a semicircular canal cause BPPV; positional maneuvers can move particles back into the vestibule.',
'Brief positional vertigo + positive Dix-Hallpike → BPPV → Epley maneuver.',
'Does the history describe episodic triggered dizziness or continuous acute vestibular symptoms?');
A(VERT,2,'A 37-year-old develops severe continuous vertigo over one day following a viral illness. Hearing is normal; there is a unidirectional horizontal nystagmus and an abnormal head impulse test to the right. Which diagnosis fits best?',
'Right vestibular neuritis|Right labyrinthitis|Right Ménière disease|Posterior canal BPPV|Acute cerebellar hemorrhage as the typical cause',
0,'Vestibular neuritis causes sustained vertigo and unilateral vestibular hypofunction with hearing preserved.|Labyrinthitis commonly includes cochlear symptoms such as hearing loss.|Ménière disease typically causes episodic vertigo with fluctuating hearing symptoms.|BPPV causes brief position-triggered episodes, not continuous illness.|Central injury must be considered when indicated, but the given coherent peripheral signs are typical for neuritis.',
'Vestibular neuritis is a peripheral acute vestibular syndrome without hearing loss; labyrinthitis involves auditory function as well.',
'Neuritis = vertigo without new hearing loss; labyrinthitis may have hearing loss.',
'Compare vestibular-only inflammation to involvement of cochlear structures.');
A(VERT,3,'A 68-year-old suddenly develops continuous vertigo, vomiting, inability to sit unsupported, dysarthria, and direction-changing gaze-evoked nystagmus. No significant hearing loss is reported. What is the most concerning explanation?',
'Posterior circulation cerebellar or brainstem ischemia|Uncomplicated posterior canal BPPV|Classic essential tremor|Isolated conductive hearing loss|Stable chronic unilateral vestibular hypofunction',
0,'Severe truncal ataxia with dysarthria and direction-changing nystagmus are central red flags for posterior circulation stroke.|BPPV causes short triggered episodes without persistent focal brainstem findings.|Essential tremor does not produce this abrupt vestibular syndrome.|Conductive loss does not cause acute central ocular motor signs.|Chronic compensation would not explain abrupt severe neurologic signs.',
'An acute vestibular syndrome with focal neurologic signs or severe truncal instability requires urgent evaluation for posterior circulation stroke. Bedside HINTS interpretation requires an appropriately trained examiner.',
'Acute vertigo + severe gait/truncal ataxia + central nystagmus → consider stroke.',
'Identify features that cannot be explained by a single peripheral semicircular-canal disturbance.');
A(EYE,1,'A vision scientist records responses from cells near the foveola, the region of highest spatial acuity. Which cell population is especially concentrated there?',
'Cones|Rods|Astrocytes|Retinal pigment epithelial macrophages|Schwann cells',
0,'The foveola is densely populated by cones supporting high-acuity photopic vision.|Rods are absent from the very center of the foveola and dominate peripheral/low-light vision.|Astrocytes are support cells, not the foveal photoreceptor specialization.|RPE cells provide support but do not form a specific foveolar cone-like sensory population.|Retinal tissue is within the CNS and does not use Schwann cells to myelinate retinal ganglion axons.',
'High-acuity central vision depends on a cone-rich fovea with specialized retinal architecture minimizing light scattering.',
'Cones dominate foveal color and high-acuity vision; rods support dim-light peripheral vision.',
'Which retinal photoreceptor is optimized for fine visual detail in bright light?');
A(EYE,2,'During a laboratory experiment, light stimulates a normal retinal rod photoreceptor. What happens first to the photoreceptor membrane potential and glutamate release?',
'Photoreceptor hyperpolarizes and releases less glutamate|Photoreceptor depolarizes and releases more glutamate|Photoreceptor depolarizes while releasing less glutamate|Photoreceptor hyperpolarizes while releasing more glutamate|Photoreceptor fires an all-or-none sodium action potential',
0,'Light closes cGMP-gated cation channels, reducing dark current, hyperpolarizing rods and decreasing glutamate release.|Darkness, not light, maintains relatively depolarized photoreceptors and tonic glutamate release.|The sign of photoreceptor light transduction is hyperpolarization, not depolarization.|Light reduces rather than increases synaptic glutamate output.|Photoreceptors primarily signal with graded potentials rather than conventional sodium spikes.',
'Photon activation of rhodopsin drives transducin and phosphodiesterase, lowers cGMP, closes cation channels, and decreases glutamate release.',
'Photoreceptors hyperpolarize in light; darkness maintains tonic glutamate.',
'Review the cGMP-gated dark current in the outer segment.');
A(EYE,1,'A neuroanatomy student examines the fundus and finds a region where blood vessels and optic nerve axons exit but photoreceptors are absent. Which structure creates the physiologic blind spot?',
'Optic disc|Foveola|Macula lutea|Ora serrata|Choroid',
0,'The optic disc has no rods or cones because ganglion cell axons leave the eye there.|Foveola is a cone-rich point of high acuity.|Macula includes central photoreceptors.|Ora serrata is the anterior limit of neural retina, not the optic nerve exit.|Choroid provides vascular support behind the retina.',
'The optic nerve head is an anatomic blind spot; the brain usually fills in missing information from the surrounding field and the other eye.',
'Optic disc has no photoreceptors and corresponds to blind spot.',
'Where do ganglion cell axons gather to become CN II?');
A(EYE,2,'A patient has accommodation difficulty after parasympathetic injury to the ciliary muscle. Which normal mechanical change would increase near focusing in a healthy eye?',
'Ciliary contraction reduces zonular tension and allows the lens to round|Ciliary relaxation reduces zonular tension and rounds the lens|Ciliary contraction increases zonular tension and flattens the lens|Sphincter pupillae contraction alone lengthens the eyeball|Superior oblique contraction changes the corneal curvature',
0,'Ciliary contraction unloads zonules, allowing the elastic lens to become more spherical for near vision.|Ciliary relaxation increases zonular tension and flattens the lens for distance.|Contraction does not increase zonular tension in normal accommodation.|Pupil constriction accompanies near response but is not lens accommodation itself.|Extraocular muscle contractions rotate the globe rather than altering lens focus.',
'Accommodation uses parasympathetic CN III input through the ciliary ganglion to contract ciliary muscle and round the lens.',
'Near: ciliary contract → zonules relax → lens rounds.',
'Think about the lens shape when suspensory ligaments become less taut.');
A(VF,2,'A pituitary macroadenoma compresses the central portion of the optic chiasm. Which visual field deficit is most characteristic?',
'Bitemporal hemianopia|Left homonymous hemianopia|Right superior quadrantanopia|Binasal hemianopia|Complete monocular blindness of the right eye',
0,'Crossing nasal retinal fibers carry temporal visual field information from both eyes.|Homonymous loss is produced by retrochiasmal lesions.|Quadrantanopia suggests focal optic radiation or cortical involvement.|Binasal loss is not the classic central-chiasmal pattern.|Monocular blindness is more typical of a prechiasmal optic nerve lesion.',
'Central chiasmal compression interrupts decussating nasal retinal axons from both eyes, producing loss of the temporal halves of both visual fields.',
'Chiasm lesion → bitemporal hemianopia.',
'Only one class of retinal fibers crosses at the chiasm; which visual hemifields do they carry?');
A(VF,3,'A left temporal lobe mass disrupts the inferior optic radiations (Meyer loop) while sparing parietal radiations and primary visual cortex. What visual deficit is expected?',
'Right superior homonymous quadrantanopia|Right inferior homonymous quadrantanopia|Left temporal monocular field loss|Bitemporal hemianopia|Complete bilateral blindness',
0,'Inferior radiations in temporal lobe convey contralateral superior visual field information.|Parietal superior radiations carry inferior visual field information.|A postchiasmal lesion affects matching visual regions in both eyes, not just one eye.|Bitemporal deficits require crossing fibers at the chiasm.|The focal lesion spares much of the visual pathway.',
'Meyer loop in the temporal lobe carries upper visual field information. A left-sided lesion leads to right upper quadrantanopia.',
'Temporal lobe Meyer loop → contralateral pie in the sky.',
'In visual pathway mapping, the superior field is represented in inferior retinal fibers.');
A(VF,2,'A patient has a right homonymous hemianopia with central (macular) vision relatively spared after a left occipital infarct. What anatomical explanation is classically taught?',
'Possible collateral macular cortical perfusion from MCA territory alongside PCA supply|Selective destruction of both optic nerves|Compression of crossing nasal fibers at the chiasm|An isolated right abducens nerve lesion|Damage only to the left superior colliculus',
0,'Occipital visual cortex is mainly PCA-supplied, but some macular representation can be spared through collateral circulation.|Optic nerve lesions cause monocular or complex prechiasmal deficits, not isolated homonymous loss.|Chiasmal compression causes bitemporal rather than homonymous loss.|CN VI controls lateral rectus, not visual field transmission.|Superior colliculus injury does not classically cause this cortical visual field defect.',
'Macular sparing sometimes accompanies occipital/PCA lesions and has several proposed explanations, including overlapping/collateral blood supply.',
'Occipital infarct → contralateral homonymous field loss; macular sparing may occur.',
'Which artery predominantly supplies the primary visual cortex?');
A(EOM,2,'A patient has vertical diplopia that worsens while descending stairs. On examination the right eye cannot depress normally when adducted. Which cranial nerve is most likely affected?',
'Right trochlear nerve (CN IV)|Right abducens nerve (CN VI)|Left abducens nerve (CN VI)|Right optic nerve (CN II)|Left facial nerve (CN VII)',
0,'CN IV innervates superior oblique, which contributes to depression of the adducted eye.|CN VI innervates lateral rectus for abduction.|Opposite abducens loss does not selectively impair right downward movement in adduction.|CN II transmits vision, not eye rotation.|CN VII controls facial expression rather than superior oblique.',
'Superior oblique dysfunction causes vertical/torsional diplopia, often worse with downward gaze on stairs or reading.',
'CN IV → superior oblique → depression of adducted eye.',
'Which of the six extraocular muscles is supplied by CN IV?');
A(EOM,3,'A 30-year-old with multiple sclerosis attempts to look left. The right eye fails to adduct, but the left eye abducts with nystagmus. Convergence is relatively preserved. Which structure is injured?',
'Right medial longitudinal fasciculus|Right oculomotor nerve peripheral motor fibers|Left abducens nerve|Left visual cortex|Right optic tract',
0,'Right MLF disruption disconnects left abducens internuclear signals from right medial rectus subnucleus, producing right internuclear ophthalmoplegia.|A peripheral III lesion usually affects additional muscles and can impair convergence.|Left abducens injury would prevent left-eye abduction rather than right-eye adduction.|Visual cortical injury affects perception/fields, not this gaze-coupling pattern.|Optic tract injury produces visual field deficits.',
'Internuclear ophthalmoplegia is impaired adduction on horizontal gaze with abducting nystagmus in the fellow eye, often from MLF demyelination.',
'INO localizes to the MLF on the side of the eye that cannot adduct.',
'Identify the internuclear tract linking abducens to contralateral oculomotor nuclei.');
A(AUTO,1,'A 50-year-old has right-sided miosis, mild ptosis, and decreased facial sweating after a neck injury. Which autonomic pathway is disrupted?',
'Right oculosympathetic pathway|Right parasympathetic CN III pathway|Left parasympathetic CN III pathway|Right retinal ganglion cell output|Left optic radiation',
0,'Ipsilateral sympathetic interruption produces the Horner triad: miosis, mild ptosis, and variable anhidrosis.|Parasympathetic CN III injury produces impaired constriction and possible mydriasis, not miosis.|A left III lesion would affect left pupillary constriction.|Retinal output disruption primarily affects vision/afferent responses.|Optic radiation injury affects visual fields rather than sweating and eyelid tone.',
'Horner syndrome results from interruption anywhere in the three-neuron sympathetic chain to the pupil/eyelid/face.',
'Horner: small pupil, mild ptosis, and sometimes reduced sweating on one side.',
'Compare the roles of pupil dilator and sphincter muscles.');
A(NY,2,'A patient with vertigo has persistent vertical downbeat nystagmus that changes with gaze direction and is not suppressed by visual fixation. Which origin should be most strongly considered?',
'Central vestibular or cerebellar pathology|Simple unilateral posterior canal BPPV as the only explanation|Isolated impacted cerumen|Otitis externa without inner-ear involvement|An uncomplicated conductive middle-ear lesion',
0,'Vertical or direction-changing gaze-evoked nystagmus suggests a central process, particularly cerebellar/brainstem disease.|Typical BPPV causes transient, positional nystagmus with a characteristic direction and latency.|Cerumen can reduce conductive hearing but does not characteristically cause central-type nystagmus.|External ear inflammation does not explain these central oculomotor signs.|Middle ear conductive defects do not cause persistent central-pattern nystagmus.',
'Central nystagmus may be purely vertical, direction-changing, or resistant to fixation suppression; peripheral vestibular nystagmus is typically unidirectional.',
'Vertical or direction-changing nystagmus is a central red flag.',
'Which nystagmus patterns require brainstem and cerebellar integration?');
A(TASTE,1,'A patient undergoes surgery involving chorda tympani and later loses taste on the anterior two-thirds of the tongue while general touch is intact. Which cranial nerve normally carries these special sensory fibers?',
'Facial nerve (CN VII)|Trigeminal nerve (CN V3)|Glossopharyngeal nerve (CN IX)|Vagus nerve (CN X)|Hypoglossal nerve (CN XII)',
0,'Chorda tympani is a branch of CN VII carrying anterior tongue taste.|V3 lingual nerve carries somatic sensation and transports chorda tympani fibers after joining them.|CN IX taste chiefly comes from posterior tongue.|CN X conveys taste from more caudal regions near the epiglottis.|CN XII innervates intrinsic/extrinsic tongue muscles.',
'Taste and general sensory input are separate modalities; CN VII supplies anterior tongue taste whereas V3 supplies general sensation.',
'Anterior tongue taste = VII; touch = V3; posterior third taste = IX.',
'Separate general sensation from taste despite their shared peripheral course.');
A(GL,2,'A 67-year-old develops sudden severe unilateral eye pain, red eye, halos around lights, nausea, and a fixed mid-dilated pupil after taking a medication with antimuscarinic effects. Which process best explains the dangerous rise in intraocular pressure?',
'Closure of the iridocorneal angle blocks trabecular aqueous outflow|Increased drainage through Schlemm canal|Loss of lens accommodation alone|Blockage of central retinal artery without pressure changes|Excess tear production by the lacrimal gland',
0,'Pupillary dilation can crowd the anterior chamber angle in a predisposed eye and block trabecular drainage.|Improved drainage would lower, not raise, pressure.|Accommodation defects do not explain an acutely painful high-pressure red eye.|Retinal arterial occlusion is a vascular emergency with sudden vision loss, generally without severe high-pressure symptoms.|Lacrimal secretion does not determine intraocular aqueous drainage.',
'Acute angle-closure glaucoma is an ophthalmic emergency: impaired aqueous outflow rapidly elevates pressure and may damage the optic nerve.',
'Antimuscarinic-induced dilation can precipitate angle closure in susceptible eyes.',
'Identify the aqueous outflow pathway at the anterior chamber angle.');
A(HEAR,1,'On examination, the Weber tuning fork test lateralizes to the left ear. Rinne testing shows bone conduction greater than air conduction in the left ear and air conduction greater than bone conduction in the right. What is the best interpretation?',
'Left conductive hearing loss|Left sensorineural hearing loss|Right conductive hearing loss|Right sensorineural hearing loss as the only possibility|Normal bilateral hearing',
0,'Weber toward left with negative Rinne left is classic left conductive hearing loss.|Left sensorineural loss usually lateralizes Weber to the better right ear and often preserves positive Rinne.|Right conductive loss would tend to lateralize Weber right and produce negative Rinne right.|Right sensorineural loss can lateralize Weber left, but a negative Rinne on left supports left conductive pathology.|Negative Rinne on the left is not expected with normal hearing.',
'Weber lateralizes toward the affected ear in conductive loss and away from the affected ear in sensorineural loss. Rinne is negative when BC exceeds AC.',
'Weber left + Rinne negative left → left conductive hearing loss.',
'Use Rinne first to distinguish impaired sound conduction from reduced cochlear neural sensitivity.');
A(HEAR,2,'A 69-year-old reports slowly progressive difficulty understanding speech in crowded environments. Audiometry shows symmetric high-frequency sensorineural hearing loss without a significant air–bone gap. Which etiology is most consistent?',
'Presbycusis|Cerumen impaction|Acute otitis media|Otosclerosis causing conductive fixation|Unilateral vestibular neuritis',
0,'Age-related cochlear or neural degeneration classically causes bilateral high-frequency sensorineural loss.|Cerumen produces conductive air-bone discrepancy.|Middle-ear infection usually produces conductive loss.|Stapes fixation typically produces conductive hearing loss.|Vestibular neuritis causes balance symptoms without primary cochlear deficit.',
'Presbycusis typically affects high frequencies and speech discrimination, especially in background noise; air and bone thresholds are reduced together.',
'Symmetric high-frequency SNHL in older adult → presbycusis.',
'Look for chronic progressive bilateral high-frequency involvement without an air–bone gap.');
A(HEAR,3,'A 42-year-old wakes with marked new unilateral hearing loss over several hours, tinnitus, and a normal appearing external canal and tympanic membrane. Tuning-fork findings suggest sensorineural rather than conductive loss. What is the most appropriate next step?',
'Urgent otolaryngology evaluation and consideration of prompt corticosteroid treatment|Delay assessment until routine audiometry in several months|Treat empirically with earwax softener only|Diagnose middle-ear effusion solely from the normal tympanic membrane|Reassure that sudden sensorineural deficits always resolve without intervention',
0,'Sudden sensorineural hearing loss is time-sensitive; urgent hearing evaluation and early treatment discussions are indicated.|Delays can miss the period of greatest expected steroid benefit.|Cerumen would explain conductive obstruction, not suspected sudden SNHL.|Normal tympanic membrane does not prove a middle-ear effusion.|Spontaneous improvement is possible but cannot be presumed and should not delay care.',
'Sudden sensorineural hearing loss merits urgent assessment, audiometry, and treatment consideration; distinguish it from conductive causes at the bedside.',
'Sudden SNHL is an otologic urgency, not a routine follow-up finding.',
'What is the consequence of delaying care in a potentially reversible acute inner-ear process?');
A(RET,2,'A person with long-standing diabetes develops retinal neovascularization and vitreous hemorrhage. Which diagnosis and mechanism fit best?',
'Proliferative diabetic retinopathy driven by ischemia-induced VEGF|Nonproliferative diabetic retinopathy without ischemia|Dry age-related macular degeneration with drusen only|Acute angle-closure glaucoma caused by aqueous buildup|Central retinal artery occlusion caused by a transient embolus alone',
0,'Ischemic retinal tissue releases VEGF, driving fragile new vessels characteristic of proliferative retinopathy.|NPDR is characterized by microaneurysms, hemorrhages and exudates before neovascular proliferation.|Dry AMD primarily causes drusen/RPE-outer retinal atrophy, not diabetic retinal neovascularization.|Glaucoma involves optic nerve pressure-related injury rather than fragile retinal new vessels.|CRAO causes acute ischemic vision loss, not the chronic neovascular diabetic pattern described.',
'Retinal hypoxia stimulates VEGF and abnormal new vessels that can bleed; anti-VEGF therapy and panretinal photocoagulation are important treatments.',
'Neovascularization = proliferative diabetic retinopathy, mediated by VEGF.',
'Does the described pathology include new vessels, or only microvascular leakage and hemorrhage?');
A(RET,3,'A 78-year-old reports rapid worsening of central vision with metamorphopsia. Optical coherence tomography shows subretinal fluid and choroidal neovascularization. What mechanism best explains the benefit of intravitreal anti-VEGF treatment?',
'Inhibition of abnormal choroidal vessel growth and vascular leakage|Restoration of dead photoreceptors by enhancing rhodopsin production|Reduced intraocular pressure by increasing trabecular drainage|Selective blockade of optic nerve glutamate transport|Reversal of a mature lens opacity',
0,'Anti-VEGF agents inhibit neovascular growth and leakage in wet AMD.|Destroyed photoreceptors are not directly regenerated by anti-VEGF therapy.|Pressure reduction is a glaucoma strategy, not the primary anti-VEGF mechanism.|Optic nerve glutamate transport is not the relevant drug target.|Lens opacity is cataract, not neovascular macular disease.',
'Wet neovascular AMD causes abnormal choroidal blood vessels and exudation, often with distortion of central vision; anti-VEGF therapy targets that growth signal.',
'Wet AMD: choroidal neovascularization and metamorphopsia; anti-VEGF limits leakage/growth.',
'Identify which pathological signal makes new abnormal blood vessels proliferate.');
A(EXAM,1,'In conventional ophthalmic documentation, a trainee records OD 20/40 and OS 20/20. Which eye is documented as having 20/40 acuity?',
'Right eye|Left eye|Both eyes together|Neither eye; OD means binocular|The worse eye cannot be determined from this notation',
0,'OD denotes the right eye (oculus dexter).|OS denotes the left eye (oculus sinister).|OU, not OD, refers to both eyes.|OD is not the binocular designation.|The patient has worse measured acuity in the right eye based on these values.',
'Use OD for right eye, OS for left, and OU for both; document acuity and other examination findings consistently.',
'OD = right; OS = left; OU = both.',
'Learn the conventional laterality abbreviations used on eye exams.');
A(EXAM,2,'During the swinging-flashlight test, both pupils constrict with light in the right eye. When light swings to the left eye, both pupils paradoxically dilate relative to their preceding constricted size. Which finding is indicated?',
'Left relative afferent pupillary defect|Left isolated oculomotor efferent palsy|Right facial nerve palsy|Bilateral complete pupillary parasympathetic failure|Normal consensual light reflex without defect',
0,'Less effective left afferent input reduces the bilateral light drive on swinging to left, producing relative dilation.|A left CN III efferent palsy would prevent left pupil constriction rather than produce symmetric relative dilation.|CN VII controls facial expression, not pupillary constriction.|Both pupils can constrict when the right eye is illuminated, arguing against complete bilateral efferent failure.|The swing-induced relative dilation is an abnormal afferent asymmetry.',
'A relative afferent pupillary defect points to asymmetric optic nerve or severe retinal afferent dysfunction; both pupils respond abnormally together as illumination alternates.',
'Swinging light toward defective afferent eye causes relative dilation of both pupils.',
'Separate the light-sensing afferent limb from the bilateral pupil-constricting efferent limb.');
})();
