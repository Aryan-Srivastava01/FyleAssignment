$(document).ready(function() {


    $("#ajaxForm").submit(function(e){
        e.preventDefault();
        var action = $(this).attr("action");
        var formData = new FormData(this);

        console.log("Form data:", formData);

        $.ajax({
            
            type: "POST",
            url: action,
            crossDomain: true,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            headers: {
                "Accept": "application/json"
            }
        }).done(function(response) {
            console.log('Form submitted successfully:', response);
            alert('The form was submitted successfully.');
            $('#contactUsModal').modal('hide');
        }).fail(function(xhr, status, error) {
            console.error('Form submission error:', status, error);
            console.error('Response:', xhr.responseText);
            alert('An error occurred! Please try again later.');
        });
    });

    
    $('#servicesCarousel').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 1; // Number of items to slide at once
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        const projectImage = document.getElementById('project-image');
        const listItems = document.querySelectorAll('.list-group-item');
    
        listItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                // Remove active class from all list items
                listItems.forEach(i => i.classList.remove('active', 'bg-danger', 'text-white'));
                // Add active class to the clicked item
                item.classList.add('active', 'bg-danger', 'text-white');
                // Change the image source
                projectImage.src = item.getAttribute('href');
            });
        });
    });
    
    $(document).ready(function() {


        $("#ajaxForm").submit(function(e){
            e.preventDefault();
            var action = $(this).attr("action");
            var formData = new FormData(this);
    
            console.log("Form data:", formData);
    
            $.ajax({
                
                type: "POST",
                url: action,
                crossDomain: true,
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                headers: {
                    "Accept": "application/json"
                }
            }).done(function(response) {
                console.log('Form submitted successfully:', response);
                alert('The form was submitted successfully.');
                $('#contactUsModal').modal('hide');
            }).fail(function(xhr, status, error) {
                console.error('Form submission error:', status, error);
                console.error('Response:', xhr.responseText);
                alert('An error occurred! Please try again later.');
            });
        });
    
        
        $('#servicesCarousel').on('slide.bs.carousel', function (e) {
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 1; // Number of items to slide at once
            var totalItems = $('.carousel-item').length;
    
            if (idx >= totalItems-(itemsPerSlide-1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i=0; i<it; i++) {
                    // append slides to end
                    if (e.direction=="left") {
                        $('.carousel-item').eq(i).appendTo('.carousel-inner');
                    }
                    else {
                        $('.carousel-item').eq(0).appendTo('.carousel-inner');
                    }
                }
            }
        });
    
    
        // Open the modal when the button is clicked
        $("#contactUsBtn").click(function() {
            $('#contactUsModal').modal('show');
        });
    
        // Close the modal when the close button is clicked
        $(document).on('click', '.close', function() {
            $('#contactUsModal').modal('hide');
        });
    
        // Close the modal when clicking outside of it
        $(window).click(function(event) {
            if ($(event.target).hasClass('modal')) {
                $('#contactUsModal').modal('hide');
            }
        });
    
         // Handle project list item clicking
         $('#projectList .list-group-item').click(function(e) {
            e.preventDefault();
            console.log('Clicked:', $(this).text()); // Log the clicked item's text
            // Remove active class from all items
            $('#projectList .list-group-item').removeClass('active bg-danger text-white');
            // Add active class to the clicked item
            $(this).addClass('active bg-danger text-white');
            // Change the image
            var newImage = $(this).data('image');
            console.log('New Image:', newImage); // Log the new image path
            $('#projectImage').attr('src', newImage);
        });
    });


    // Open the modal when the button is clicked
    $("#contactUsBtn").click(function() {
        $('#contactUsModal').modal('show');
    });

    // Close the modal when the close button is clicked
    $(document).on('click', '.close', function() {
        $('#contactUsModal').modal('hide');
    });

    // Close the modal when clicking outside of it
    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $('#contactUsModal').modal('hide');
        }
    });
});
