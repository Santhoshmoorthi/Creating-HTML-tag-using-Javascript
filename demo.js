function create_html_tag()
{
    // Taking paragraph content here
   content = document.getElementById("input_text").value;
   // creating paragraph content here
   para_element = document.createElement("p");//<p>  </p>
   // creating text node to get content
   our_data = document.createTextNode(content);
   // adding content to our paragraph
   para_element.append(our_data);

   mydiv = document.getElementById("div1");
   mydiv.appendChild(para_element);
}