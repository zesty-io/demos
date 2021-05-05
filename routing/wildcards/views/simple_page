(** recipe: simple page > single page view **)

<div class="simple-page recipe-wrap">
	(** Simple output of the page title **)
	<h1 itemprop="name headline">{{thispage.title}}</h1>
	
	<div class="z-row">
		
		<div class="col-2/3" itemprop="mainContentOfPage">
			
			(** this if statement check if an image is present, if so, it print the image **)
			{{if {thispage.image} }}
			<img src="{{thispage.image.getImage(600,250,crop)}}" class="z-responsive-width" alt="{{thispage.title}} Image" itemprop="primaryImageOfPage image" />
			{{end-if}}
			
			(** below outputs the content which is inputed in the Zesty Content tab **)	
			<div itemprop="text">{{thispage.content}}</div>
			
		</div>
		
		<div class="col-1/3">
			<div class="side-bar">
				<div class="widget">
					{{site.subnav(true)}}
				</div>
				<div class="Widget">
					{{include garnish-sidebar-contact-form}}
				</div>
			</div>
		</div>
	</div>
</div>



