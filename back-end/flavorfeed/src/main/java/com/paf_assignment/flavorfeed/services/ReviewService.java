package com.paf_assignment.flavorfeed.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.paf_assignment.flavorfeed.models.Review;
import com.paf_assignment.flavorfeed.models.Review.Product;
import com.paf_assignment.flavorfeed.repositories.ReviewRepository;

@Service
public class ReviewService {
    
    @Autowired 
    private ReviewRepository reviewRepository; 

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getAllReview(){
        return reviewRepository.findAll();
    }

    public Optional<Review> getReviewById(String id){
        return reviewRepository.findById(id);
    }

    public Review updateReview(String id, Review review) {
        Optional<Review> optionalReview = reviewRepository.findById(id);

        if (optionalReview.isPresent()){
            Review existingReview = optionalReview.get();
            existingReview.setReviewTitle(review.getReviewTitle());
            existingReview.setReviewDescription(review.getReviewDescription());
            existingReview.setReviewerName(review.getReviewerName());
            existingReview.setReviewDate(review.getReviewDate());
            existingReview.setProducts(review.getProducts());
            return reviewRepository.save(existingReview);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }

    public void deleteReview(String id) {
        Optional<Review> optionalReview = reviewRepository.findById(id);

        if (optionalReview.isPresent()) {
            reviewRepository.delete(optionalReview.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }

    //add product
    public void addProduct(String reviewId, Product product) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);

        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            review.getProducts().add(product);
            reviewRepository.save(review);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }

    //all product
    public List<Product> getAllProducts(String reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
    
        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            return review.getProducts();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }
    
    //one product
    public Product getProductById(String reviewId, String productId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
    
        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            Optional<Product> optionalProduct = review.getProducts()
                                                        .stream()
                                                        .filter(p -> p.getPid().equals(productId))
                                                        .findFirst();
            if (optionalProduct.isPresent()) {
                return optionalProduct.get();
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }

    //update product
    public void updateProduct(String reviewId, Product updatedProduct) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
    
        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            Optional<Product> optionalProduct = review.getProducts()
                                                        .stream()
                                                        .filter(p -> p.getPid().equals(updatedProduct.getPid()))
                                                        .findFirst();
            if (optionalProduct.isPresent()) {
                Product product = optionalProduct.get();
                product.setPname(updatedProduct.getPname());
                product.setPcost(updatedProduct.getPcost());
                reviewRepository.save(review);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }

    //delete product
    public void deleteProduct(String reviewId, String productId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
    
        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            List<Product> products = review.getProducts();
            products.removeIf(product -> product.getPid().equals(productId));
            review.setProducts(products);
            reviewRepository.save(review);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Review not found");
        }
    }

    //all products 
    public List<Product> getAllProducts() {
        List<Review> reviews = reviewRepository.findAll();
        List<Product> products = new ArrayList<>();
    
        for (Review review : reviews) {
            products.addAll(review.getProducts());
        }
    
        return products;
    }    
    
    
}
