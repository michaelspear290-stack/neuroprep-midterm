/* Midterm 2: retinal pathology, glaucoma, eye exam, chemical senses and anatomy cases. */
(function(){'use strict';const A=window.NP2_ADD;const E=(t,l,s,o,w,k,h,v)=>A(t,l,s,o,0,w,w.split('|')[0],k,h||'Identify the anatomical compartment and relate it to expected findings.',v);
const T='Taste and Smell',G='Glaucoma',R='Retinopathy / Macular Degeneration',X='Basic Eye and Orbit Exam',M='Anatomy Lab: Midline Cavities',EYE='Anatomy Lab: Eye',EAR='Anatomy Lab: Ear';
E(T,3,'After a frontal head injury, a patient has new anosmia, cerebrospinal fluid rhinorrhea and nasal bleeding. Which mechanism most directly accounts for smell loss?',
'Shearing of olfactory receptor axons traversing the cribriform plate|Isolated injury to the lateral geniculate nucleus|Damage to motor fibers of CN XII|Injury to the postcentral gyrus only|Bilateral interruption of tympanic chorda fibers',
'Olfactory filaments cross cribriform foramina and are vulnerable to shearing with anterior skull-base fracture.|LGN is a visual relay.|CN XII is tongue motor.|Postcentral cortex processes somatic sensation.|Chorda tympani conveys taste, not olfaction.',
'Cribriform plate fractures can cause sensorineural anosmia from olfactory filament injury.','Which tiny nerve fibers traverse the anterior skull base?');
E(T,2,'A patient has severe nasal mucosal swelling but intact olfactory nerve function; odorants cannot reach the olfactory epithelium. Which term best describes the resulting smell loss?',
'Conductive anosmia|Sensorineural anosmia from sheared olfactory fila|Cortical blindness|Ageusia from CN VII injury|Vestibular neuritis',
'Mechanical obstruction prevents odorants reaching intact receptors, producing conductive loss.|Sensorineural anosmia involves olfactory receptor/nerve/central pathway dysfunction.|Cortical blindness is visual.|Ageusia is loss of taste.|Vestibular neuritis is balance disorder.',
'Conductive anosmia is impaired odorant access; sensorineural anosmia is receptor, nerve or central pathway damage.','Is the odorant blocked, or is the transduction pathway destroyed?');
E(T,3,'A patient with a left facial nerve lesion proximal to chorda tympani has reduced taste over the anterior two-thirds of the left tongue, with preserved general touch. Which pathway has been damaged?',
'Facial gustatory fibers projecting to solitary tract nucleus|Glossopharyngeal general somatic fibers to trigeminal sensory nucleus|Hypoglossal motor fibers|Vagus motor fibers to pharyngeal constrictors|Optic afferents to lateral geniculate nucleus',
'CN VII chorda tympani taste signals project through geniculate ganglion to the rostral nucleus of solitary tract.|IX serves posterior tongue taste and pharyngeal sensory input, not anterior taste.|XII is tongue movement.|CN X motor supports swallowing.|LGN is visual thalamic relay.',
'Anterior tongue taste: VII → geniculate ganglion → solitary tract; posterior third taste: IX.','Find the brainstem gustatory relay shared by cranial taste afferents.');
E(T,2,'A patient recognizes sweet flavors but cannot perceive the cooling burn of menthol or irritation from ammonia. Which peripheral modality may be selectively impaired?',
'Trigeminal chemosensory irritation rather than olfactory smell itself|Optic nerve visual afferent input|Corticospinal motor output to facial muscles|Cochlear nerve high-frequency transduction|Superior salivatory nucleus parasympathetic output',
'Pungency, burn and cooling involve trigeminal somatosensory/chemesthetic pathways separate from olfaction and taste.|Optic nerve mediates vision.|Corticospinal tract controls movement.|Cochlear nerve mediates hearing.|Salivary parasympathetics affect secretion.',
'Chemical irritation and cooling in nasal/oral mucosa are distinct from true odor and gustatory sensation.','Distinguish general trigeminal nociception from olfactory chemoreception.');
E(G,3,'A 64-year-old develops unilateral severe ocular pain, halos, vomiting, a red eye, cloudy cornea and fixed mid-dilated pupil. Which abnormal aqueous pathway explains the acute attack?',
'Mechanical closure of trabecular outflow at the anterior chamber angle|Decreased dopamine in substantia nigra|Loss of optic radiation input to visual cortex|Destruction of retinal rods causing low-light impairment|Increased venous drainage through Schlemm canal',
'Acute angle closure prevents aqueous outflow, rapidly elevating intraocular pressure and creating corneal edema.|Dopamine loss causes movement disorders.|Optic radiation lesions cause visual field loss without the red painful cloudy cornea pattern.|Rod damage causes night blindness.|Improved canal drainage would lower IOP.',
'Painful red eye with fixed mid-dilated pupil and cloudy cornea is angle closure emergency.','Which anatomical outflow structure lies at the iridocorneal angle?');
E(G,3,'A patient has elevated intraocular pressure but a visibly open iridocorneal angle. Progressive optic nerve cupping and peripheral field loss develop. Which pathophysiology is more typical than acute angle closure?',
'Chronic trabecular outflow dysfunction in open-angle glaucoma|Complete separation of neurosensory retina from pigment epithelium|Pupillary block causing a suddenly closed angle in every patient|Acute retinal arterial embolism|Focal CN IV neuropathy',
'Open-angle glaucoma develops with impaired trabecular drainage despite the angle being anatomically open.|Retinal detachment causes visual curtain/field phenomena.|Angle closure is a different glaucoma mechanism.|CRAO causes acute retinal ischemia.|CN IV palsy causes vertical diplopia.',
'Open-angle glaucoma can silently damage optic nerve and peripheral visual field over time.','Compare angle anatomy with outflow function.');
E(G,2,'Which ophthalmic medication lowers intraocular pressure by inhibiting carbonic anhydrase-mediated aqueous humor secretion?',
'Acetazolamide|Tropicamide|Phenylephrine|Levodopa|Ethosuximide',
'Acetazolamide inhibits carbonic anhydrase in ciliary processes and reduces aqueous production.|Tropicamide blocks muscarinic receptors and dilates pupil.|Phenylephrine is alpha1 agonist and dilates pupil.|Levodopa treats dopamine deficiency.|Ethosuximide blocks T-type Ca currents in absence epilepsy.',
'Carbonic anhydrase inhibitors reduce aqueous humor secretion from ciliary epithelium.','Find the enzyme controlling aqueous bicarbonate transport.');
E(G,3,'A patient with reactive airway disease is prescribed topical timolol for glaucoma and subsequently has wheezing. Which target explains the adverse effect?',
'Nonselective beta-adrenergic blockade can cause bronchospasm|Direct muscarinic agonism contracts ciliary muscle only|Selective alpha1 stimulation contracts pupil dilator|Irreversible inhibition of all ocular sodium channels|Dopamine D1 stimulation in the striatum',
'Timolol blocks beta receptors and can provoke bronchospasm even when given as eyedrops.|Timolol is not primarily a muscarinic agonist.|Alpha1 agonism is phenylephrine-related.|Timolol is not a local anesthetic sodium-channel blocker.|Nigrostriatal dopamine is unrelated to this side effect.',
'Topical beta blockers can have systemic cardiopulmonary adverse effects, especially in asthma or heart block.','Consider systemic absorption of a nonselective beta blocker.');
E(G,3,'After starting topiramate, a patient develops bilateral acute eye pain, blurred vision and sudden marked myopia. Why can this medication rarely trigger angle closure without a classic isolated pupillary block?',
'Ciliary body effusion moves the lens–iris diaphragm anteriorly|Selective pupil dilation alone creates every case|Retinal artery thrombosis increases lens thickness|Cochlear endolymph leak pushes the iris forward|Bilateral optic radiations become demyelinated',
'Topiramate can cause ciliary effusion/forward rotation of lens-iris diaphragm, creating secondary angle closure and acute myopic shift.|This drug-associated mechanism often does not depend on simple pupillary block.|Retinal arterial occlusion does not mechanically push the lens.|Cochlear fluid is unrelated.|Radiations affect visual fields but not anterior chamber angle.',
'Topiramate-related angle closure is secondary to ciliary effusion and anterior lens–iris displacement.','Look for a mechanism moving the lens–iris diaphragm rather than just dilating the iris.');
E(R,3,'A child is found to have leukocoria and a retinal mass with calcifications. Which tumor suppressor pathway is most strongly implicated?',
'Biallelic RB1 disruption causing retinoblastoma|SOD1 toxic gain of function|ATP7B copper transporter loss|HTT CAG expansion|APP overproduction alone',
'Retinoblastoma arises with loss of RB1 tumor suppressor function, commonly presenting with leukocoria or strabismus.|SOD1 is associated with ALS.|ATP7B causes Wilson disease.|HTT expansion causes Huntington disease.|APP processing relates to amyloid disease.',
'Retinoblastoma: RB1 tumor suppressor loss, leukocoria and calcified intraocular mass.','Which inherited two-hit tumor suppressor is central to pediatric retinal cancer?');
E(R,3,'A patient with diabetes shows microaneurysms, dot-blot hemorrhages and hard exudates but no retinal neovascularization. What stage best matches?',
'Nonproliferative diabetic retinopathy|Proliferative diabetic retinopathy|Exudative age-related macular degeneration exclusively|Retinal detachment|Optic neuritis',
'Microaneurysms and intraretinal hemorrhages without new vessels describe nonproliferative disease.|Proliferative stage is defined by pathological neovascularization.|Wet AMD has choroidal neovascular membranes and central distortion.|Detachment produces separated neural retina.|Optic neuritis is nerve inflammation.',
'Neovascularization separates proliferative from nonproliferative diabetic retinopathy.','Which retinal microvascular feature defines proliferative disease?');
E(R,3,'Retinal ischemia in a diabetic patient promotes formation of fragile new vessels that bleed into vitreous. Which growth signal is most responsible?',
'Vascular endothelial growth factor|Acetylcholinesterase|Dopamine beta hydroxylase|Rhodopsin|Glutamic acid decarboxylase',
'VEGF is induced by hypoxic retina and drives neovascularization and leakage.|AChE metabolizes acetylcholine.|Dopamine beta hydroxylase synthesizes norepinephrine.|Rhodopsin detects light.|GAD synthesizes GABA.',
'Proliferative diabetic retinopathy features ischemia-induced VEGF and fragile new vessels.','Which factor drives pathological vessel proliferation under hypoxia?');
E(R,2,'An older patient has slowly progressive central vision loss. Fundus shows large drusen and geographic atrophy without choroidal neovascularization. What disorder best fits?',
'Non-neovascular (dry) age-related macular degeneration|Neovascular (wet) AMD|Proliferative diabetic retinopathy|Acute angle closure glaucoma|Central retinal artery occlusion',
'Dry AMD shows drusen and retinal pigment epithelial/photoreceptor atrophy.|Wet AMD features choroidal neovascularization and exudation.|PDR shows retinal neovascular vessels.|Angle closure causes severe painful acute red eye.|CRAO causes sudden painless severe loss.',
'Dry AMD = drusen and atrophy; wet AMD = choroidal new vessels and leakage.','Do you see new vessels or deposits/atrophy?');
E(R,3,'A 75-year-old has sudden painless monocular blindness, a pale retina and cherry-red macular spot. Which emergency assessment is important once central retinal artery occlusion is suspected?',
'Immediate stroke-oriented vascular evaluation and urgent ophthalmic assessment|Routine treatment with topical antihistamine only|Elective cataract surgery in six months|Epley maneuver|Deep brain stimulation referral',
'Retinal arterial occlusion is retinal ischemic stroke equivalent and warrants urgent stroke-center/vascular investigation.|Allergy treatment does not restore arterial perfusion.|Cataract is gradual lens opacity.|Epley treats BPPV.|DBS treats motor circuits.',
'CRAO is an acute retinal arterial ischemic emergency, not a routine outpatient visual complaint.','Which systemic vascular disease process can embolize retinal arteries?');
E(R,3,'A child with seizures, developmental delay and pale mulberry-like retinal astrocytic hamartomas undergoes systemic evaluation. Which disease is most associated?',
'Tuberous sclerosis complex|Huntington disease|Idiopathic Parkinson disease|Otosclerosis|Myasthenia gravis',
'TSC (TSC1/TSC2, mTOR pathway) can cause retinal astrocytic hamartomas and central nervous system hamartomas/seizures.|Huntington produces adult chorea.|Parkinson produces parkinsonism.|Otosclerosis causes conductive hearing deficits.|MG affects neuromuscular transmission.',
'Tuberous sclerosis can produce retinal astrocytic hamartomas along with cortical tubers and epilepsy.','Look for multisystem hamartomas linked to an mTOR signaling disorder.');
E(R,2,'An adult with multiple café-au-lait macules has iris Lisch nodules on slit-lamp evaluation. Which genetic syndrome should be considered?',
'Neurofibromatosis type 1|Tuberous sclerosis complex|Wilson disease|Huntington disease|Ménière disease',
'NF1 produces Lisch iris hamartomas and may cause optic pathway glioma.|TSC more classically produces retinal astrocytic hamartomas.|Wilson causes corneal Kayser–Fleischer copper rings.|Huntington causes chorea.|Ménière causes episodic vestibular and auditory symptoms.',
'NF1 includes iris Lisch nodules; TSC more classically includes retinal astrocytic hamartomas.','Distinguish pigment iris hamartomas from retinal glial hamartomas.');
E(X,2,'A patient has equal pupil size and both pupils constrict when light is shone in either eye. Which statement about pupillary reflex circuitry is correct?',
'Each optic nerve afferent drives bilateral Edinger–Westphal output through pretectal connections|Only the stimulated eye receives parasympathetic pupillary output|Facial nerve VII is the principal pupillary constrictor efferent|The retina connects to vagal dorsal motor nucleus for light reflex|The medial longitudinal fasciculus directly secretes acetylcholine onto iris sphincter',
'Pretectal nuclei activate bilateral Edinger–Westphal nuclei, causing direct and consensual constriction.|Consensual response shows bilateral output.|CN III carries pupil constrictor fibers, not VII.|Vagus is not the light-reflex output.|MLF contributes ocular motor coordination, not direct iris synapses.',
'Light reflex: CN II afferent → pretectal → bilateral Edinger–Westphal → CN III parasympathetic.','Why does one flashlight stimulate constriction of both pupils?');
E(X,3,'During a swinging-flashlight test, movement of the light from the healthy right eye to diseased left eye causes both pupils to dilate relative to the prior constriction. What is the finding?',
'Left relative afferent pupillary defect|Left isolated efferent CN III pupil lesion|Right facial motor palsy|Bilateral fixed pharmacological mydriasis|Normal pupillary responses',
'Reduced left retinal/optic afferent input leads to relative dilation of both pupils on left stimulation.|Efferent III lesions impair constriction in one pupil regardless of which eye receives light.|VII does not control pupil.|Pharmacologic bilateral fixation prevents normal response to right input.|Relative dilation with swing is abnormal.',
'RAPD is an asymmetry of afferent light input, not an isolated pupil motor failure.','Decide whether both pupils respond to changes in which eye senses the light.');
E(X,2,'A patient reports diplopia that disappears entirely when either eye is covered. What interpretation is most useful?',
'Binocular diplopia due to ocular misalignment|Monocular diplopia caused only by a lens irregularity|Cortical blindness|An isolated optic nerve sensory lesion without alignment changes|Conductive hearing loss',
'Binocular diplopia depends on simultaneous mismatched retinal images, and disappears with either eye occluded.|Monocular diplopia persists when the other eye is covered and may reflect optical abnormalities.|Cortical blindness causes loss of vision, not usually isolated binocular double vision.|A pure optic neuropathy does not inherently cause ocular misalignment.|Hearing loss is unrelated.',
'Binocular diplopia resolves with monocular occlusion, helping localize ocular motor alignment problems.','Does the double image require input from two eyes?');
E(X,3,'On bedside confrontation testing, a patient consistently misses objects in the right upper visual field of each eye. Which localization is most plausible?',
'Left temporal optic radiations (Meyer loop)|Left parietal superior radiations|Right optic nerve alone|Central optic chiasm|Right recurrent laryngeal nerve',
'Left Meyer loop carries right superior visual quadrant signals.|Superior parietal radiation carries lower field.|A right nerve lesion causes monocular deficit.|Chiasmal lesion causes bitemporal defects.|Recurrent laryngeal injury causes hoarseness.',
'Confrontation fields can reveal homonymous defects that localize to retrochiasmal pathways.','Which hemisphere receives right visual-field information?');
E(X,2,'A patient has 20/60 acuity in the right eye and 20/20 in the left. Which notation correctly records these findings?',
'OD 20/60 and OS 20/20|OD 20/20 and OS 20/60|OU 20/60 and OD 20/20|OS 20/60 and OU 20/20|CN II 20/60 and CN III 20/20',
'OD denotes right eye and OS left eye.|This reverses eye laterality.|OU indicates binocular/both eyes rather than a right-eye reading.|OS is left and OU is both, not the stated right-left values.|Cranial nerve numerals are not the routine acuity abbreviations.',
'Document OD right, OS left and OU both eyes.','Translate the Latin oculus dexter and oculus sinister.');
E(M,3,'In the simplified sagittal midline-cavities diagram, marker A labels a rigid plate at the roof of the mouth. A cleft in this region can cause what functional disturbance?',
'Failure to separate nasal and oral cavities effectively during feeding or speech|Paralysis of vocal folds from recurrent laryngeal nerve damage|Loss of otolith-mediated linear acceleration sensation|Loss of high-frequency cochlear amplification|Spastic paraplegia from lateral corticospinal injury',
'Hard palate defects compromise normal separation of oral and nasal cavities.|Vocal fold motor is vagal recurrent laryngeal.|Otolith organs are in inner ear.|Cochlear amplification is outer hair-cell function.|Corticospinal lesions are unrelated to palate defect.',
'Hard palate provides an oral–nasal bony partition essential for speech and swallowing.','The marker lies at a boundary separating two cavities.','mouth');
E(M,2,'In the simplified sagittal oral-cavity diagram, marker B indicates the organ with intrinsic and extrinsic skeletal muscles important for bolus propulsion. Which motor nerve injury causes ipsilateral atrophy and deviation toward the lesion?',
'Hypoglossal nerve CN XII|Glossopharyngeal nerve CN IX|Olfactory nerve CN I|Abducens nerve CN VI|Optic nerve CN II',
'CN XII innervates almost all tongue muscles and LMN lesions produce ipsilateral wasting and deviation.|CN IX supplies stylopharyngeus, posterior tongue taste/sensation.|CN I mediates smell.|CN VI controls lateral rectus.|CN II conveys vision.',
'Tongue motor function is predominantly CN XII; sensory and taste fibers come from separate nerves.','Differentiate the tongue’s motor and sensory supplies.','mouth');
E(M,3,'In the simplified sagittal pharynx illustration, marker C is posterior to the oral cavity. Which cranial nerve provides the principal motor output to pharyngeal constrictors during swallowing?',
'Vagus nerve through pharyngeal plexus|Trigeminal V1|Abducens CN VI|Facial nerve via chorda tympani|Olfactory nerve CN I',
'CN X via pharyngeal plexus supplies most pharyngeal motor muscles.|V1 is somatic sensory forehead/eye.|CN VI abducts eye.|Chorda tympani carries taste and parasympathetic salivation.|CN I carries smell.',
'Vagus supplies most pharyngeal muscles; stylopharyngeus is an IX exception.','Which motor cranial nerve controls most muscles of swallowing in pharynx?','mouth');
E(M,3,'A lesion of the cribriform plate above the nasal cavity causes clear CSF rhinorrhea and sudden anosmia. Which structures traversing its foramina are most susceptible?',
'Olfactory nerve fila|Optic nerve and ophthalmic artery|Trigeminal mandibular nerve|Hypoglossal motor roots|Facial and vestibulocochlear nerves',
'Olfactory receptor axons pass through cribriform plate into olfactory bulb.|CN II passes through optic canal.|V3 passes foramen ovale.|XII passes hypoglossal canal.|VII/VIII pass internal acoustic meatus.',
'Cribriform fracture can cause CSF leak plus olfactory axon shearing.','Identify the anterior cranial base opening for CN I.');
E(EYE,3,'In the simplified eye cross-section, marker C labels the posterior neural stalk. If this structure is destroyed, which pupillary finding is expected when only that eye is illuminated?',
'Reduced direct and consensual light responses because afferent CN II signal is lost|Only the opposite pupil fails to constrict despite intact afferents|Only vertical diplopia develops|Both pupils permanently become dilated in all circumstances|The affected eye has increased aqueous production',
'Optic nerve injury removes sensory drive to bilateral pretectal Edinger–Westphal outputs.|This would be an efferent or other unusual lesion, not simple afferent optic nerve destruction.|CN IV palsy causes vertical diplopia.|The other eye can still supply bilateral afferent signal.|Aqueous secretion is ciliary process function.',
'Optic nerve injury affects the afferent limb to both direct and consensual responses when light enters that eye.','The posterior stalk carries visual input, not a motor branch.','eye');
E(EYE,2,'In the simplified eye diagram, marker B indicates a transparent anterior curved tissue. Which property makes it critically important for normal vision?',
'It accounts for substantial optical refraction of incoming light|It houses retinal photoreceptors|It contains cochlear hair cells|It secretes all aqueous humor by itself|It provides the optic chiasm decussation',
'Cornea is the major refractive surface in air.|Photoreceptors are posterior retina.|Hair cells are in inner ear.|Aqueous is mainly produced by ciliary epithelium.|Chiasm is intracranial.',
'Cornea is a major refractive surface and remains transparent via endothelial fluid regulation.','Which anterior eye tissue provides strong optical bending of light?','eye');
E(EYE,3,'In the simplified sagittal eyeball figure, marker A follows the posterior light-sensitive lining. An infarct selectively involving its central artery causes which funduscopic pattern?',
'Pale retina with a cherry-red foveal spot|Bilateral drusen without ischemia|Optic chiasm compression and bitemporal hemianopia|Cloudy cornea with fixed mid-dilated pupil as sole manifestation|Conjunctival injection only',
'Central retinal artery occlusion creates ischemic retinal pallor while foveal choroidal supply preserves red appearance.|Drusen indicate macular degeneration.|Chiasm is intracranial, separate from retinal perfusion.|Angle closure is anterior chamber outflow emergency.|Injection alone is nonspecific.',
'Retinal arterial ischemia may cause sudden monocular vision loss and cherry-red spot.','Which retinal layer has distinct vascular supply?','eye');
E(EYE,2,'In an eye specimen, which two coats are immediately external to the neurosensory retina at the posterior globe?',
'Retinal pigment epithelium and choroid|Cornea and iris|Lens and vitreous cavity|Conjunctiva and lacrimal gland|Dura and arachnoid',
'RPE contacts photoreceptors externally with vascular choroid beneath.|Cornea/iris are anterior segment structures.|Lens is anterior; vitreous lies internal to retina.|Conjunctiva/lacrimal are outer surface/secretory structures.|Dura/arachnoid invest CNS and optic nerve, not retina as adjacent posterior layers.',
'Retina is supported externally by RPE and vascular choroid.','Trace outward from photoreceptor outer segments.');
E(EAR,3,'In the simplified ear schematic, marker A lies at the outer-middle ear boundary. A perforation here would most directly produce which audiologic pattern?',
'Conductive hearing loss with reduced air conduction relative to bone|Central auditory processing aphasia|Hyperacusis caused by cochlear outer hair-cell loss alone|Complete bilateral vestibular failure|Contralateral homonymous hemianopia',
'Perforation of tympanic membrane disrupts mechanical sound transmission, leading to a conductive component.|Auditory aphasia is cortical processing disorder.|Outer hair-cell loss is sensorineural, not eardrum damage.|Vestibular organs are separate.|Homonymous visual fields are optic pathway.',
'Tympanic membrane damage typically causes conductive hearing impairment.','Where does mechanical vibration first enter middle ear?','ear');
E(EAR,2,'In the simplified ear drawing, marker B spans the ossicular chain. Which structure is the last ossicle to deliver vibration through the oval window?',
'Stapes|Malleus|Incus|Utricle|Saccule',
'Stapes footplate drives oval window fluid motion.|Malleus is attached to tympanic membrane.|Incus lies between malleus and stapes.|Utricle is vestibular sensory organ.|Saccule detects linear acceleration.',
'Malleus → incus → stapes, with stapes footplate in oval window.','The first ossicle contacts tympanic membrane; identify the last.','ear');
E(EAR,3,'In the simplified ear illustration, marker C labels the coiled organ. A basal-turn lesion preferentially diminishes which acoustic perception?',
'High-frequency sound|Low-frequency sound only|Linear acceleration when jumping|Angular acceleration during head rotation|Smell of volatile odorants',
'Basal cochlea has stiff narrow basilar membrane optimized for high tones.|Low tones map toward compliant apex.|Linear acceleration is utricle/saccule.|Rotation is semicircular canals.|Smell uses olfactory epithelium.',
'Cochlear basal turn = high-frequency tonotopy; apex = low-frequency.','Relate membrane stiffness to resonant frequency.','ear');
E(EAR,3,'An ear specimen shows a gelatinous structure overlying hair cells in marker C, the spiral organ. Which named membrane is principally involved in deflecting cochlear stereocilia?',
'Tectorial membrane|Tympanic membrane|Round window membrane|Otolithic membrane in utricle|Cupula of semicircular ampulla',
'Tectorial membrane and basilar movement generate cochlear hair-bundle deflection.|Tympanic membrane conducts external ear vibration.|Round window relieves cochlear fluid pressure.|Otolithic membrane with otoconia detects linear acceleration.|Cupula detects angular acceleration in canals.',
'Organ of Corti hair cells work with tectorial and basilar membranes to transduce sound.','Identify the membrane inside, not outside, the cochlear duct.','ear');
})();