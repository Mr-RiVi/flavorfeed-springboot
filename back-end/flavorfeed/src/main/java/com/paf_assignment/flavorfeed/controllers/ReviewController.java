package com.paf_assignment.flavorfeed.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.paf_assignment.flavorfeed.models.Review;
import com.paf_assignment.flavorfeed.models.Review.Product;
import com.paf_assignment.flavorfeed.services.ReviewService;

@RestController
@RequestMapping("api/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review createReview = reviewService.createReview(review);
        return new ResponseEntity<>(createReview, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Review>> getAllReview(){
        List<Review> review = reviewService.getAllReview();
        return new ResponseEntity<>(review, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable String id) {
        Optional<Review> review = reviewService.getReviewById(id);
        if(review.isPresent()){
            return new ResponseEntity<>(review.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable String id, @RequestBody Review updateReviewData) {
        Review updatedReview = reviewService.updateReview(id, updateReviewData);
        return new ResponseEntity<>(updatedReview, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable String id) {
        try {
            reviewService.deleteReview(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //create
    @PostMapping("/{reviewId}/product/create")
    public ResponseEntity<Review> addProduct(@PathVariable String reviewId, @RequestBody Product product) {
        reviewService.addProduct(reviewId, product);
        Optional<Review> updatedReview = reviewService.getReviewById(reviewId);
        if(updatedReview.isPresent()){
            return new ResponseEntity<>(updatedReview.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{reviewId}/product/list")
    public ResponseEntity<List<Product>> getAllProducts(@PathVariable String reviewId) {
        List<Product> products = reviewService.getAllProducts(reviewId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{reviewId}/product/{productId}")
    public ResponseEntity<Product> getOneProduct(@PathVariable String reviewId, @PathVariable String productId) {
        Product product = reviewService.getProductById(reviewId, productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/{reviewId}/product/update/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable String reviewId, @PathVariable String productId, @RequestBody Product updatedProductData) {
        try {
            reviewService.updateProduct(reviewId, updatedProductData);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (ResponseStatusException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //delete
    @DeleteMapping("/{reviewId}/product/delete/{productId}")
    public ResponseEntity<Review> deleteProduct(@PathVariable String reviewId, @PathVariable String productId) {
        reviewService.deleteProduct(reviewId, productId);
        Optional<Review> updatedReview = reviewService.getReviewById(reviewId);
        if(updatedReview.isPresent()){
            return new ResponseEntity<>(updatedReview.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //all products
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = reviewService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
