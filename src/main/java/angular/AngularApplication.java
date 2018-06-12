package angular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class AngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularApplication.class, args);
	}
        
        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                public void addCordMapping(CorsRegistry registry) {
                    registry.addMapping("/api/*");
                }
            };
        }
}