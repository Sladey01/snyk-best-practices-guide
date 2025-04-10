const snykBestPractices = {
  languages: {
    javascript: {
      name: "JavaScript",
      scanMethods: {
        scm: {
          recommended: true,
          details: "Connect your GitHub, GitLab, Bitbucket, or Azure Repos to scan JavaScript projects directly from source control.",
          steps: [
            "Connect your SCM in the Snyk dashboard",
            "Select repositories to import",
            "Set up automatic scanning on pull requests",
            "Configure test frequency (daily recommended)"
          ],
          benefits: [
            "Automatic scanning on code changes",
            "Pull request checks",
            "Dependency management via fix PRs",
            "Historical vulnerability tracking"
          ]
        },
        cli: {
          recommended: true,
          details: "Use Snyk CLI for local development and CI/CD pipelines.",
          installation: "npm install -g snyk",
          commands: {
            auth: "snyk auth",
            test: "snyk test",
            monitor: "snyk monitor",
            fixCommand: "snyk wizard"
          },
          parameters: [
            "--all-projects: Scan all projects in the directory",
            "--file=package.json: Specify the manifest file",
            "--org=your-org-name: Specify the Snyk organization",
            "--severity-threshold=medium: Only report issues of the specified level or higher"
          ],
          cicdIntegration: "Add `snyk test` and `snyk monitor` to your CI/CD pipeline."
        }
      },
      specificRecommendations: [
        "Use package-lock.json or yarn.lock for deterministic builds",
        "Enable Snyk's automatic PR fixes",
        "Use Snyk to test your code for vulnerabilities in addition to dependencies",
        "Consider setting up custom policies to handle false positives"
      ],
      frameworks: {
        react: {
          name: "React",
          specificScanning: "For React applications, ensure you also scan for React-specific vulnerabilities.",
          recommendations: [
            "Use Snyk to identify vulnerable React components",
            "Run scans against your build output to catch production issues",
            "Configure custom ignore rules for frontend-only packages with low risk"
          ]
        },
        node: {
          name: "Node.js",
          specificScanning: "For Node.js applications, also scan your application code for security issues.",
          recommendations: [
            "Enable Snyk Code to check for insecure coding patterns",
            "Configure separate projects for frontend and backend components",
            "Run separate scans for development and production dependencies",
            "Use --ignore-policy flag to handle known exceptions"
          ]
        },
        express: {
          name: "Express",
          specificScanning: "Scan Express applications for common web vulnerabilities.",
          recommendations: [
            "Enable Snyk Code to identify Express-specific vulnerabilities",
            "Use Snyk to monitor HTTP middleware security",
            "Scan for insecure configurations in your Express setup",
            "Add custom rules for route handling security"
          ]
        }
      }
    },
    python: {
      name: "Python",
      scanMethods: {
        scm: {
          recommended: true,
          details: "Connect your GitHub, GitLab, Bitbucket, or Azure Repos to scan Python projects directly from source control.",
          steps: [
            "Connect your SCM in the Snyk dashboard",
            "Select repositories to import",
            "Set up automatic scanning on pull requests",
            "Configure test frequency (daily recommended)"
          ],
          benefits: [
            "Automatic scanning on code changes",
            "Pull request checks",
            "Dependency management via fix PRs",
            "Support for requirements.txt, Pipfile, and setup.py"
          ]
        },
        cli: {
          recommended: true,
          details: "Use Snyk CLI for local development and CI/CD pipelines.",
          installation: "pip install snyk",
          commands: {
            auth: "snyk auth",
            test: "snyk test",
            monitor: "snyk monitor",
            fixCommand: "snyk wizard"
          },
          parameters: [
            "--all-projects: Scan all projects in the directory",
            "--file=requirements.txt: Specify the manifest file",
            "--package-manager=pip: Specify package manager",
            "--command=python: Use with --file=setup.py when scanning setup.py"
          ],
          cicdIntegration: "Add `snyk test` and `snyk monitor` to your CI/CD pipeline."
        }
      },
      specificRecommendations: [
        "Pin dependencies to specific versions in requirements.txt",
        "Use virtual environments to isolate project dependencies",
        "Regularly update dependencies using Snyk's PR service",
        "Set up dependency licenses scanning"
      ],
      frameworks: {
        django: {
          name: "Django",
          specificScanning: "For Django applications, ensure you scan for framework-specific vulnerabilities.",
          recommendations: [
            "Enable Snyk Code to identify Django security issues",
            "Scan templates for XSS vulnerabilities",
            "Check custom middleware for security issues",
            "Set up separate projects for apps within your Django project"
          ]
        },
        flask: {
          name: "Flask",
          specificScanning: "For Flask applications, focus on microframework security patterns.",
          recommendations: [
            "Enable Snyk Code to detect Flask-specific vulnerabilities",
            "Check extensions for security issues",
            "Scan route handlers for CSRF and authentication vulnerabilities",
            "Set up separate scanning for blueprint modules"
          ]
        },
        fastapi: {
          name: "FastAPI",
          specificScanning: "For FastAPI applications, focus on API security best practices.",
          recommendations: [
            "Enable Snyk Code for API-specific vulnerability detection",
            "Check dependency injection patterns for security issues",
            "Scan Pydantic models for validation vulnerabilities",
            "Configure authentication middleware scanning"
          ]
        }
      }
    },
    java: {
      name: "Java",
      scanMethods: {
        scm: {
          recommended: true,
          details: "Connect your GitHub, GitLab, Bitbucket, or Azure Repos to scan Java projects directly from source control.",
          steps: [
            "Connect your SCM in the Snyk dashboard",
            "Select repositories to import",
            "Set up automatic scanning on pull requests",
            "Configure test frequency (daily recommended)"
          ],
          benefits: [
            "Automatic scanning on code changes",
            "Pull request checks",
            "Dependency management via fix PRs",
            "Support for Maven, Gradle, and other build tools"
          ]
        },
        cli: {
          recommended: true,
          details: "Use Snyk CLI for local development and CI/CD pipelines.",
          installation: "npm install -g snyk",
          commands: {
            auth: "snyk auth",
            test: "snyk test",
            monitor: "snyk monitor",
            fixCommand: "snyk wizard"
          },
          parameters: [
            "--all-projects: Scan all projects in the directory",
            "--file=pom.xml: Specify the manifest file",
            "--gradle-sub-project=subproject: Scan specific Gradle subproject",
            "--scan-all-unmanaged: Find and scan JAR files"
          ],
          cicdIntegration: "Add `snyk test` and `snyk monitor` to your CI/CD pipeline."
        }
      },
      specificRecommendations: [
        "Configure Maven or Gradle plugins for integrated scanning",
        "Set up scanning for transitive dependencies",
        "Enable Snyk's automatic PR fixes",
        "Use Snyk to scan compiled artifacts for more accurate results"
      ],
      frameworks: {
        spring: {
          name: "Spring",
          specificScanning: "For Spring applications, focus on framework-specific vulnerabilities.",
          recommendations: [
            "Check Spring dependencies and security configurations",
            "Scan controller mappings for security issues",
            "Validate dependency injection patterns",
            "Enable scanning of application.properties/yaml for misconfigurations"
          ]
        },
        quarkus: {
          name: "Quarkus",
          specificScanning: "For Quarkus applications, focus on Java microservice security.",
          recommendations: [
            "Scan native images for vulnerabilities",
            "Check extension configurations for security issues",
            "Enable container scanning for Quarkus applications",
            "Configure separate scanning for GraalVM-compiled code"
          ]
        }
      }
    },
    go: {
      name: "Go",
      scanMethods: {
        scm: {
          recommended: true,
          details: "Connect your GitHub, GitLab, Bitbucket, or Azure Repos to scan Go projects directly from source control.",
          steps: [
            "Connect your SCM in the Snyk dashboard",
            "Select repositories to import",
            "Set up automatic scanning on pull requests",
            "Configure test frequency (daily recommended)"
          ],
          benefits: [
            "Automatic scanning on code changes",
            "Pull request checks",
            "Dependency management via fix PRs",
            "Support for go.mod and go.sum files"
          ]
        },
        cli: {
          recommended: true,
          details: "Use Snyk CLI for local development and CI/CD pipelines.",
          installation: "npm install -g snyk",
          commands: {
            auth: "snyk auth",
            test: "snyk test",
            monitor: "snyk monitor",
            fixCommand: "snyk wizard"
          },
          parameters: [
            "--all-projects: Scan all projects in the directory",
            "--file=go.mod: Specify the manifest file",
            "--detection-depth=<DEPTH>: Set how many subdirectories to search",
            "--exclude=<NAME>: Skip specific directories"
          ],
          cicdIntegration: "Add `snyk test` and `snyk monitor` to your CI/CD pipeline."
        }
      },
      specificRecommendations: [
        "Use go.sum to lock dependency versions",
        "Enable Snyk Code to scan for Go-specific vulnerabilities",
        "Use vendor directory for better control over dependencies",
        "Configure Snyk to scan your go.mod and go.sum files"
      ]
    },
    ruby: {
      name: "Ruby",
      scanMethods: {
        scm: {
          recommended: true,
          details: "Connect your GitHub, GitLab, Bitbucket, or Azure Repos to scan Ruby projects directly from source control.",
          steps: [
            "Connect your SCM in the Snyk dashboard",
            "Select repositories to import",
            "Set up automatic scanning on pull requests",
            "Configure test frequency (daily recommended)"
          ],
          benefits: [
            "Automatic scanning on code changes",
            "Pull request checks",
            "Dependency management via fix PRs",
            "Support for Gemfile and Gemfile.lock"
          ]
        },
        cli: {
          recommended: true,
          details: "Use Snyk CLI for local development and CI/CD pipelines.",
          installation: "npm install -g snyk",
          commands: {
            auth: "snyk auth",
            test: "snyk test",
            monitor: "snyk monitor",
            fixCommand: "snyk wizard"
          },
          parameters: [
            "--all-projects: Scan all projects in the directory",
            "--file=Gemfile: Specify the manifest file",
            "--package-manager=rubygems: Specify package manager",
            "--dev: Include development dependencies"
          ],
          cicdIntegration: "Add `snyk test` and `snyk monitor` to your CI/CD pipeline."
        }
      },
      specificRecommendations: [
        "Use Gemfile.lock to pin dependency versions",
        "Configure Bundler audit alongside Snyk for comprehensive coverage",
        "Enable automatic PR fixes for Gemfile dependencies",
        "Set up separate scanning for application code vulnerabilities"
      ],
      frameworks: {
        rails: {
          name: "Ruby on Rails",
          specificScanning: "For Rails applications, focus on framework-specific vulnerabilities.",
          recommendations: [
            "Scan controller actions for security issues",
            "Check ActiveRecord queries for injection vulnerabilities",
            "Validate view templates for XSS vulnerabilities",
            "Set up configuration scanning for Rails-specific issues"
          ]
        }
      }
    },
    csharp: {
      name: "C#",
      scanMethods: {
        scm: {
          recommended: true,
          details: "Connect your GitHub, GitLab, Bitbucket, or Azure Repos to scan C# projects directly from source control.",
          steps: [
            "Connect your SCM in the Snyk dashboard",
            "Select repositories to import",
            "Set up automatic scanning on pull requests",
            "Configure test frequency (daily recommended)"
          ],
          benefits: [
            "Automatic scanning on code changes",
            "Pull request checks",
            "Dependency management via fix PRs",
            "Support for .NET project files and NuGet packages"
          ]
        },
        cli: {
          recommended: true,
          details: "Use Snyk CLI for local development and CI/CD pipelines.",
          installation: "npm install -g snyk",
          commands: {
            auth: "snyk auth",
            test: "snyk test",
            monitor: "snyk monitor",
            fixCommand: "snyk wizard"
          },
          parameters: [
            "--all-projects: Scan all projects in the directory",
            "--file=MyProject.csproj: Specify the project file",
            "--package-manager=nuget: Specify package manager",
            "--solution-file=MySolution.sln: Specify solution file"
          ],
          cicdIntegration: "Add `snyk test` and `snyk monitor` to your CI/CD pipeline."
        }
      },
      specificRecommendations: [
        "Use package references with specific versions",
        "Set up scanning for solution files to catch all projects",
        "Configure Snyk to handle .NET Core and .NET Framework projects",
        "Enable automatic PR fixes for NuGet dependencies"
      ],
      frameworks: {
        aspnet: {
          name: "ASP.NET Core",
          specificScanning: "For ASP.NET applications, focus on web-specific vulnerabilities.",
          recommendations: [
            "Scan controller endpoints for security issues",
            "Check Razor views for XSS vulnerabilities",
            "Validate middleware configurations for security best practices",
            "Set up configuration scanning for appsettings.json"
          ]
        }
      }
    },
    php: {
      name: "PHP",
      scanMethods: {
        scm: {
          recommended: true,
          details: "Connect your GitHub, GitLab, Bitbucket, or Azure Repos to scan PHP projects directly from source control.",
          steps: [
            "Connect your SCM in the Snyk dashboard",
            "Select repositories to import",
            "Set up automatic scanning on pull requests",
            "Configure test frequency (daily recommended)"
          ],
          benefits: [
            "Automatic scanning on code changes",
            "Pull request checks",
            "Dependency management via fix PRs",
            "Support for composer.json and composer.lock"
          ]
        },
        cli: {
          recommended: true,
          details: "Use Snyk CLI for local development and CI/CD pipelines.",
          installation: "npm install -g snyk",
          commands: {
            auth: "snyk auth",
            test: "snyk test",
            monitor: "snyk monitor",
            fixCommand: "snyk wizard"
          },
          parameters: [
            "--all-projects: Scan all projects in the directory",
            "--file=composer.json: Specify the manifest file",
            "--package-manager=composer: Specify package manager",
            "--dev: Include development dependencies"
          ],
          cicdIntegration: "Add `snyk test` and `snyk monitor` to your CI/CD pipeline."
        }
      },
      specificRecommendations: [
        "Use composer.lock to lock dependency versions",
        "Enable Snyk Code to scan for PHP-specific vulnerabilities",
        "Configure separate scanning for application code",
        "Set up custom rules for PHP security issues"
      ],
      frameworks: {
        laravel: {
          name: "Laravel",
          specificScanning: "For Laravel applications, focus on framework-specific vulnerabilities.",
          recommendations: [
            "Scan controller routes for security issues",
            "Check Blade templates for XSS vulnerabilities",
            "Validate middleware configurations",
            "Set up scanning for environment configurations"
          ]
        },
        symfony: {
          name: "Symfony",
          specificScanning: "For Symfony applications, focus on component security.",
          recommendations: [
            "Scan controller services for security issues",
            "Check Twig templates for XSS vulnerabilities",
            "Validate bundle configurations",
            "Set up container scanning for Symfony applications"
          ]
        }
      }
    }
  }
};

export default snykBestPractices;
