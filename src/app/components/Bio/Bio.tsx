'use client';

interface BioProps {
  generatedBios: string | null;
}

const Bio = ({ generatedBios }: BioProps) => {
  return (
    <output>
      {generatedBios && (
        <>
          {generatedBios
            .substring(generatedBios.indexOf('1') + 3)
            .split('2.')
            .map((generatedBio, index) => (
              <div key={index} className='chat chat-start'>
                <div className='chat-header'>
                  Cupid <time className='text-xs opacity-50'>1 second ago</time>
                </div>
                <div
                  className='chat-bubble'
                  onClick={() => {
                    navigator.clipboard.writeText(generatedBio);
                  }}
                >
                  {generatedBio}
                </div>
                <div className='chat-footer opacity-50'>Seen</div>
              </div>
            ))}
        </>
      )}
    </output>
  );
};

export default Bio;
