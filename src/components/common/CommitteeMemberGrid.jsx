export default function CommitteeMemberGrid({ members }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                    {member.image && (
                        <div className="relative w-full h-60 overflow-hidden">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                        />
                        </div>
                    )}
                    <div className="border-l-4 border-primary pl-4 mb-2 font-semibold text-lg">{member.name}</div>
                    <div className="text-gray-700">{member.role}</div>
                </div>
            ))}
        </div>
    );
}