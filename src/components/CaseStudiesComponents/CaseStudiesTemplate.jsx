import React, { useState } from 'react'

const renderTextBlock = (title, lines = []) => (
  <div>
    {title ? <h2 className="m-0 text-[2rem] font-medium leading-tight text-[#1f1f1f]">{title}</h2> : null}
    <div className="mt-3">
      {lines.map((line, index) => (
        <p key={`${title || 'text'}-${index}`} className="my-1 leading-7 text-[#1f1f1f]">
          {line}
        </p>
      ))}
    </div>
  </div>
)

const renderImageBlock = (image, onClick) => {
  if (!image?.src) return null

  return (
    <button
      type="button"
      onClick={() => onClick?.(image)}
      className="block h-full w-full cursor-zoom-in overflow-hidden rounded-md"
    >
      <img
        src={image.src}
        alt={image.alt || image.title || 'Case study image'}
        className="block h-full w-full rounded-md object-cover"
      />
    </button>
  )
}



const BeforeAfterGroup = ({ group, onImageClick }) => {
  const layout = group?.layout === 'left-large' ? 'left-large' : 'right-large' // if group.layout is "left-large", use that. Otherwise default us "right large"
  const gridColsClass = layout === 'left-large' ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[0.85fr_1.15fr]'
  const afterImages = group?.afterImages || []
  const beforeImages = group?.beforeImages || []
  

  // This picks which image becomes the large image
  // There are two images in afterImages array  
  const bigImage = afterImages[0]

  // Create new array without big image in it, to create stacked small images next to big image.

  const stackedImages = [ ...afterImages.slice(1), ...beforeImages]
      

  // Safety check, if there is no big image, and no stacked images, then render nothing. System won't crush  
  if (!bigImage?.src && stackedImages.length === 0) return null

  return (
    <div className={`grid gap-4.5 ${gridColsClass}`}>
      {layout === 'left-large' ? <div className="max-w-200 h-auto transition duration-500 ease-out hover:scale-[1.02]">{renderImageBlock(bigImage, onImageClick)}</div> : null}

      <div className="grid auto-rows-fr gap-4.5">
        {stackedImages.map((image, imageIndex) => (
          <div key={`stacked-image-${imageIndex}`} className="relative max-h-70 transition duration-500 ease-out hover:scale-[1.02]">
            {renderImageBlock(image, onImageClick)}

            {image?.label ? (
              <span className="absolute right-3 top-3 rounded-full bg-[#5a1d1d] px-3 py-1.5 text-sm font-semibold text-white">
                {image.label}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {layout === 'right-large' ? <div className="max-w-200 h-auto transition duration-500 ease-out hover:scale-[1.02]">{renderImageBlock(bigImage, onImageClick)}</div> : null}
    </div>
  )
}

const CaseStudiesTemplate = ({
  title,
  intro = [],
  sections = [],
  beforeAfterTitle = 'Before and After',
  beforeAfterGroups = []
}) => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="bg-(--color-brand-secondary) px-5 py-8 md:px-8">
      <div className="max-w-7xl mx-auto px-6  py-10 container">
        <div>
          {title ? <h1 className="mb-4.5 text-[2.6rem] font-medium leading-[1.2] text-[#1f1f1f] ">{title}</h1> : null}

          <div>
            {intro.map((paragraph, index) => (
              <p key={`intro-${index}`} className="mb-6 leading-7 text-[#1f1f1f]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {sections.map((section, index) => {

          // Get layout from serction, but don't crash if undefined
          // if section.layout = image-left => isTextLeft = false
          // if section.layout = image-right => isTextLeft = true
          const isTextLeft = section?.layout !== 'image-left'

          return (
            <div key={`section-${index}`} className="mt-10 grid items-center gap-7 md:grid-cols-2 justify-center ">
              {isTextLeft ? <div className='flex justify-center text-left'>{renderTextBlock(section?.title, section?.lines)}</div> : renderImageBlock(section?.image, setSelectedImage)}
              {isTextLeft ? renderImageBlock(section?.image, setSelectedImage) : <div className='flex justify-center text-left'>{renderTextBlock(section?.title, section?.lines)}</div>}
            </div>
          )
        })}

        {beforeAfterGroups.length > 0 ? (
          <div className="grid gap-5.5">
            <h2 className="m-0 text-[2.2rem] font-medium leading-tight text-[#1f1f1f]">{beforeAfterTitle}</h2>
            {beforeAfterGroups.map((group, index) => (
              <BeforeAfterGroup key={`before-after-${index}`} group={group} onImageClick={setSelectedImage} />
            ))}
          </div>
        ) : null}
      </div>

      {selectedImage?.src ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-4xl font-light text-white"
            onClick={(event) => {
              event.stopPropagation()
              setSelectedImage(null)
            }}
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt || selectedImage.title || 'Expanded case study image'}
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}

export default CaseStudiesTemplate