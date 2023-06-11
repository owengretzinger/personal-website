---
title: 'How To Create A Resume Using HTML'
subtitle: 'Mobile-responsive, printable, ATS-friendly, and matches your theme'
dateCreated: '2023-06-10'
dateModified: '2023-06-10'
priority: 99
link: https://github.com/owengretzinger/html-resume-template
---

In this article I show you how to create an awesome resume [like mine](/resume). I use [Tailwind CSS](https://tailwindcss.com/), but the concepts could be applied to other frameworks too. If you'd like to spare yourself from reading the whole thing, you can view the template [here](https://owengretzinger.github.io/html-resume-template/) and get the code on [GitHub](https://github.com/owengretzinger/html-resume-template).

Here are some pictures of my resume at the time of writing:

![](https://i.imgur.com/xI0cJnb.png)
![](https://i.imgur.com/QwEyraE.png)
![](https://i.imgur.com/Ag5PgPU.png)

## Context 

After [creating this website](/articles/personal-website), I realized my resume was a bit outdated so I wanted to create a brand new one that matches my website's theme.

I didn't want to use a document editor like Word because that's way too restricive, I didn't want to use Latex (like I did last time) because that's too annoying and time consuming, and I didn't want to use [Kickresume](https://kickresume.com) (even though all the LinkedIn influencers rave about it) because it still isn't flexible enough (especially the free version).

So I thought; if only I could create a resume using HTML, then I could make it however I want...

## How To Do It 

The key to this is the existence of print-specific options. In Tailwind CSS, there's a super convenient print modifier ([docs link](https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles)). This way, we can make two column layouts collapse down on mobile, use cool styles (such as rounded edges), and have other things on the screen (such as buttons), then use the modifier to make the page the right size and hide those extra buttons when we print it.

There's another issue, though. Even after trying everything, there's still margins around the outside with these stamps when I go to print the page:

![](https://i.imgur.com/REL2tUe.png)

Luckily, there are two ways to solve this! If you just want to download your resume, you can open the "More settings" option and select "None" for "Margins".

![](https://i.imgur.com/zmhL0aD.png)

For a solution that works by default when you print your resume, you can use the [@page CSS rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@page) (in my case I put this in `globals.css`):

```css
@page {
	margin: 0;
}
```

That should get you started, but you can also keep reading and I'll walk you through how I created the template.

## Template 

You can check out the [code for this website](https://github.com/owengretzinger/personal-website) if you want to see exactly how I created [my resume](/resume), but I used [Next.js](https://nextjs.org/) and my project structure might not make it the easiest to adapt my code to how you want to create your resume. So, I've created a template for a static site using React and Tailwind CSS which you can use! You can find it on [GitHub](https://github.com/owengretzinger/html-resume-template), or follow along with my explanations here.

### Tutorial 

For this tutorial, I'm assuming knowledge of Tailwind CSS. 

To start, I created a project by following Tailwind's [Create React App instructions](https://tailwindcss.com/docs/guides/create-react-app). I deleted some of the files, and my project structure ended up looking like this:

![](https://i.imgur.com/uodtNRz.png)

Now, we will create our resume inside `App.js`.

```javascript
export default function App() {
  return (
    <div className="max-w-full min-h-screen text-black bg-blue-200 px-4 print:px-0 py-10 print:py-0">
      {/* <-- resume page */}
      <div className="w-full sm:max-w-[52rem] lg:aspect-[8.5/11] bg-white rounded-3xl shadow-xl mx-auto
                      print:w-[52rem] print:h-[100vh] print:aspect-[8.5/11] print:rounded-none print:shadow-none">
        <div className="w-full h-full flex flex-col p-4 md:p-16 print:p-16">
        
          {/* resume content here */}
          
        </div>
      </div>
      {/* resume page --> */}
    </div>
  )
}
```

The outer div is the background, and just adds some padding around the edges. The middle div is our actual page. I added some styles so that on big screens the page has an 8.5/11 aspect ratio which closely resembles how the page looks when it's printed, but on smaller screens the page is as long as it needs to be to fit all the content.

I also added rounding to the edges, a shadow, etc., but then removed those styles for printing.

A width of `52rem` isn't particularly special, it was just a good size for me and worked well with some of the other things I had going on with my website. `print:h-[100vh]` ensures that the pdf is only one page (when I didn't put it there, there was a second empty page for me).

The inner div adds padding around the edges and is a flex box to make sure our resume content fits inside the page how its supposed to.

This is what we have so far (I made the background red to visualize the padding):

![](https://i.imgur.com/hzR6V0L.png)

Now, let's add a header to the resume. Add the following where the "resume content goes here" comment was:

```javascript
{/* <-- desktop header */}
<div className="w-full hidden sm:flex print:flex justify-between items-center">
  <h2 className="flex-1 text-4xl font-[1000]">First Name<br />Last Name</h2>
  <p>[optional headshot]</p>
  <div className="flex-1 flex sm:justify-end print:justify-end">
    <div className="flex flex-col w-fit sm:items-end print:items-end gap-[2px]">
      <p>Links here</p>
      <p>Or phone number, etc.</p>
      <p>Whatever you want :)</p>
    </div>
  </div>
</div>
{/* desktop header --> */}
```

I put my name on the left and some social links on the right. You could add a headshot in the middle like the resume templates on [Kickresume](https://kickresume.com) have, but I have heard recruiters say not to in order to avoid bias and for them to avoid bias accusations, so I removed the headshot from my resume.

![](https://i.imgur.com/rjeLcjm.png)

Underneath, add the following:

```javascript
{/* <-- mobile header */}
<div className="sm:hidden print:hidden">
  <div className="flex w-full max-w-full justify-between items-center gap-3">
    <h2 className="text-3xl [@media(min-width:400px)]:text-4xl font-[1000]">First Name<br />Last Name</h2>
    <div>
      <p>[optional headshot]</p>
    </div>
  </div>
</div>
{/* mobile header --> */}
```

This way, on small screens the links will be hidden. We'll add them underneath in the next step:

```javascript
{/* body */}
<div className="w-full h-full flex flex-col sm:flex-row print:flex-row gap-4">
  {/* <-- left column */}
  <div className="flex-1 flex flex-col gap-4">
    {/* <-- links shown on mobile only */}
    <div className="sm:hidden print:hidden">
      <p>Links here</p>
      <p>Or phone number, etc.</p>
      <p>Whatever you want :)</p>
    </div>
    {/* links shown on mobile only --> */}
	
    {/* left column content here */}
    
  </div>
  {/* left column --> */}

  {/* <-- right column */}
  <div className="flex-1 flex flex-col gap-4">
	
    {/* right column content here */}
    
  </div>
  {/* right column --> */}
</div>
{/* body --> */}
```

The outer div uses `flex flex-col sm:flex-row` so that on mobile screens it collapses down to one column.

I also put this between the header from earlier and the body from just now to add a gap:

```javascript
{/* gap between header and body */}
<span className="mb-12" />
```

Lastly, I put `import "./index.css";` at the top of the file and put the following from earlier in `index.css`:

```css
@page {
	margin: 0;
}
```

And we're done! Here's the final product (I added red backgrounds to visualize the columns):

![](https://i.imgur.com/Y2cVHxy.png)

Now all you have to do is add some text bragging about yourself and (hopefully) get some interviews.

### Full Code 

Here's the full code found on [GitHub](https://github.com/owengretzinger/html-resume-template) if you want to copy and paste (I also filled in the "content goes here" comments with some placeholder text):

```javascript
import "./index.css";

export default function App() {
  return (
    <div className="max-w-full min-h-screen text-black bg-blue-200 px-4 print:px-0 py-10 print:py-0">
      {/* <-- resume page */}
      <div className="w-full sm:max-w-[52rem] lg:aspect-[8.5/11] bg-white rounded-3xl shadow-xl mx-auto
                      print:w-[52rem] print:h-[100vh] print:aspect-[8.5/11] print:rounded-none print:shadow-none">
        <div className="w-full h-full flex flex-col p-4 md:p-16 print:p-16">
          {/* <-- desktop header */}
          <div className="w-full hidden sm:flex print:flex justify-between items-center">
            <h2 className="flex-1 text-4xl font-[1000]">First Name<br />Last Name</h2>
            <p>[optional headshot]</p>
            <div className="flex-1 flex sm:justify-end print:justify-end">
              <div className="flex flex-col w-fit sm:items-end print:items-end gap-[2px]">
                <p>Links here</p>
                <p>Or phone number, etc.</p>
                <p>Whatever you want :)</p>
              </div>
            </div>
          </div>
          {/* desktop header --> */}
          {/* <-- mobile header */}
          <div className="sm:hidden print:hidden">
            <div className="flex w-full max-w-full justify-between items-center gap-3">
              <h2 className="text-3xl [@media(min-width:400px)]:text-4xl font-[1000]">First Name<br />Last Name</h2>
              <div>
                <p>[optional headshot]</p>
              </div>
            </div>
          </div>
          {/* mobile header --> */}

          {/* gap between header and body */}
          <span className="mb-12" />

          {/* <-- body */}
          <div className="w-full h-full flex flex-col sm:flex-row print:flex-row gap-4">
            {/* <-- left column */}
            <div className="flex-1 flex flex-col gap-4 bg-blue-50">
              {/* <-- links shown on mobile only */}
              <div className="sm:hidden print:hidden">
                <p>Links here</p>
                <p>Or phone number, etc.</p>
                <p>Whatever you want :)</p>
              </div>
              {/* links shown on mobile only --> */}

              <p>First column</p>
              <p className="text-2xl my-12">...</p>
              <p>You can see how it looks on mobile (or other screen sizes) using inspect element, and how it looks when you export to pdf by doing Ctrl+P or Cmd+P!</p>
              <p>If these light blue column boxes don't show up when you go to print and you're curious why, you have to go to "More settings" and check the "Background graphics" box.</p>
            </div>
            {/* left column --> */}

            {/* <-- right column */}
            <div className="flex-1 flex flex-col gap-4 bg-blue-50">
              <p>Second column</p>
              <p className="text-2xl my-12">...</p>
              <p>Provided by <Link href="https://owengretzinger.com">Owen Gretzinger</Link> :) I would love to connect with you on <Link href="https://linkedin/com/in/owengretzinger">LinkedIn</Link>!</p>
              <p>Check out <Link href="https://owengretzinger.com/resume">my resume</Link> (I created this template to share how I made it) and see <Link href="https://owengretzinger.com/articles/html-resume">the article I wrote about it</Link> if that isn't where you came from already!</p>
              <p className="my-36">...</p>
              <p>More content</p>
            </div>
            {/* right column --> */}
          </div>
          {/* body --> */}
        </div>
      </div>
      {/* resume page --> */}
    </div>
  )
}

function Link({ ...props }) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{props.children}</a>
  )
}
```

![](https://i.imgur.com/oeYoSXP.png)

## Conclusion 

Thanks for reading, I hope this was helpful! If you are interested in how I made other parts of [my website](https://owengretzinger.com), such as the sticky nav bar, turning markdown files into articles, links with cool underline animations, fade-in effects, etc., I would be happy to write articles explaining!