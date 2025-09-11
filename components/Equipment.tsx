import React from 'react';

const equipmentData = [
    {
        title: "AIR COOLER",
        description: "Resfriamento eficiente para processos industriais críticos",
        features: ["Retubagem completa com materiais de alta resistência", "Manutenção preventiva e corretiva em campo"],
        imgSrc: "https://images.unsplash.com/photo-1629906002314-a5b17a15155b?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "TROCADOR DE CALOR CASCO TUBO",
        description: "Recuperação total da eficiência em equipamentos de alta complexidade",
        features: ["Manutenção de equipamentos de grande porte", "Substituição de feixes tubulares completos"],
        imgSrc: "https://images.unsplash.com/photo-1618422168171-87a42b10a248?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "RETUBAGEM DE FEIXE TUBULAR",
        description: "Renovação completa para máxima performance operacional",
        features: ["Fabricação de feixes sob medida", "Materiais especificados conforme aplicação"],
        imgSrc: "https://images.unsplash.com/photo-1543369792-9445103a4571?q=80&w=800&auto=format&fit=crop"
    }
];

const EquipmentCard: React.FC<{ title: string; description: string; features: string[]; imgSrc: string; }> = ({ title, description, features, imgSrc }) => (
    <div className="bg-brand-medium-blue rounded-lg overflow-hidden group border border-brand-slate/50 shadow-lg">
        <div className="overflow-hidden h-48">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-brand-yellow">{title}</h3>
            <p className="mt-2 text-brand-light-slate">{description}</p>
            <ul className="mt-4 space-y-2 text-brand-lightest-slate">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-brand-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


const Equipment: React.FC = () => {
    return (
        <section className="relative py-20 bg-brand-dark-blue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate">Expertise Técnica Comprovada</h2>
                    <p className="mt-2 text-brand-light-slate">Especializados em todos os tipos de trocadores de calor.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipmentData.map((item, index) => (
                        <EquipmentCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Equipment;